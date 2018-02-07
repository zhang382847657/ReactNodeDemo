/**
 * Created by zhanglin on 2018/2/6.
 */
import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {PullToRefresh,ListView} from 'antd-mobile';
import './index.less';


/***
 * 长列表组件
 * @description 集成刷新跟加载更多的功能
 *
 * <MyListView
 url="http://****"   //数据请求的url  必填
 param={{name:"a"}}  //数据请求的参数  可选
 pageSize={200}      //一页显示多少条数据  可选  默认20条
 method="POST"       //请求方法  "POST"|"GET"  可选  默认GET
 needToken={false}   //是否需要token  可选  默认false
 renderRow={//这里绘制行组件} //同ListView组件一样
 emptyComponent={()=>{
                        //这里绘制数据为空时展示的组件  可选
                }}

 />
 */


let pageNum = 0; //当前页
export default class MyListView extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataList:new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}), //数据源(ListView.DataSource)
            param:this.props.param, //请求参数
            refreshing: true, //是否正在刷新
            isLoading: true, //是否正在加载中
            hasMore:true, //是否有更多数据
            scrollHeight:document.documentElement.clientHeight, //ListView的实际高度
        };

        this.dataList = []; //数据源的数据类型

        this._loadData = this._loadData.bind(this);

    }

    componentWillReceiveProps(nextProps){


        if(nextProps.param){ //如果请求参数有变动的话，更新请求参数，并执行刷新动作
            this.setState({
                param:nextProps.param
            });
            this._loadData("refresh");
        }
    }


    componentDidMount() {

        let finalHeight = this.state.scrollHeight;
        if(document.getElementById('topHeight')){ //如果有顶部导航，则减去导航高度
            finalHeight -= document.getElementById('topHeight').offsetHeight;
        }
        if(document.getElementById('bottomHeight')){ //如果有底部tabbar，则减去底部tabbar高度
            finalHeight -= document.getElementById('bottomHeight').offsetHeight;
        }

        this.setState({
            scrollHeight:finalHeight
        });

        //加载数据
        this._loadData("refresh");
    }


    /** 加载数据
     * @param loadType 加载数据的类型，判断是刷新还是加载更多 'refresh'|'load'  */
    _loadData(loadType){

        let that = this;

        if(loadType == "refresh"){
            pageNum = 0;
            this.setState({ refreshing: true, isLoading: true });
        }else{
            if (this.state.isLoading || !this.state.hasMore) {
                return;
            }
            this.setState({ isLoading: true });
            pageNum ++;
        }

        var finalParam = this.state.param;
        finalParam["pageSize"] = this.props.pageSize;
        finalParam["pageNum"] = pageNum;

        //TODO: 目前只是用计时器来模拟请求数据，以后改成fetch请求
        setTimeout(() => {


            if(loadType == "refresh"){ //如果是下拉刷新
                that.dataList = that.props.dataSource;
                that.setState({
                    dataList:that.state.dataList.cloneWithRows(that.dataList),
                    refreshing: false,
                    isLoading: false,
                    hasMore:(pageNum+1)*that.props.pageSize < 200 ? true : false
                })
            }else { //如果是上拉刷新
                that.dataList = that.dataList.concat(that.props.dataSource);
                that.setState({
                    dataList:that.state.dataList.cloneWithRows(that.dataList),
                    isLoading: false,
                    hasMore:(pageNum+1)*that.props.pageSize < 200 ? true : false
                })
            }

        }, 600);

    }


    /**
     * @description ListView
     * @return {*}
     */
    render() {


        //如果需要显示为空的内容，并且没有数据的时候，才显示为空的样式
        if(this.props.emptyComponent){
            if(this.state.isLoading == false && this.dataList.length == 0){
                return this.props.emptyComponent()
            }
        }

        return (
            <ListView {...this.props}
                      dataSource={this.state.dataList}
                      renderFooter={() => (<div style={{textAlign: 'center' }}>
                          {this.state.isLoading ? '加载中...' : ''}
                      </div>)}
                      style={{height:this.state.scrollHeight,overflow: 'auto'}}
                      useBodyScroll={false}
                      renderSectionBodyWrapper ={()=>{
                          return(
                              <div>
                                  {this.props.children}
                              </div>
                          )
                      }}
                      pullToRefresh={<PullToRefresh refreshing={this.state.refreshing}
                                                    onRefresh={()=>{this._loadData("refresh")}}/>}
                      onEndReached={()=>{this._loadData("load")}}
                      pageSize={5}

            />
        )
    }
}

MyListView.propTypes = {
    url:PropTypes.string.isRequired, //请求的url
    param:PropTypes.object, //请求的参数
    method:PropTypes.string.isRequired, //请求方式 POST|GET
    pageSize:PropTypes.number.isRequired, //一页请求多少条数据
    needToken:PropTypes.boolean, //是否需要token
    emptyComponent:PropTypes.any //绘制为空时的组件

};


MyListView.defaultProps = {
    param:{},
    method:'GET',
    pageSize:20,
    needToken:false
};