/**
 * Created by zhanglin on 2018/2/6.
 */

import React, {Component} from 'react';
import {Flex, WhiteSpace, ListView} from 'antd-mobile';
import './index.less';
import Header from './header';
import MyListView from '../component/listview';
import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();



export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state={
            refreshing:true,
            dataList:new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}), //数据源(ListView.DataSource)
            scrollHeight:document.documentElement.clientHeight, //ListView的实际高度
        };

        this._renderItem = this._renderItem.bind(this);
        this._gotoTopicDetail = this._gotoTopicDetail.bind(this);

    }

    componentDidMount() {

        let finalHeight = this.state.scrollHeight;
        console.log("初始屏高 == ",finalHeight);
        if(document.getElementById('topHeight')){ //如果有顶部导航，则减去导航高度
            finalHeight -= document.getElementById('topHeight').offsetHeight;
            console.log("减去导航高度 == ",finalHeight);
        }
        if(document.getElementById('bottomHeight')){ //如果有底部tabbar，则减去底部tabbar高度
            finalHeight -= document.getElementById('bottomHeight').offsetHeight;
            console.log("减去tabbar高度 == ",finalHeight);
        }

        console.log("最终 == ",finalHeight);
        this.setState({
            scrollHeight:finalHeight,
        });

    }


    /***
     * 绘制行
     * @param rowData 每一行的数据
     * @param sectionID  组ID
     * @param rowID  行ID
     * @returns {XML}
     * @private
     */
    _renderItem(rowData, sectionID, rowID){

        let imageUrl = null;
        if(rowData.images){
            imageUrl = rowData.images.split(',')[0];
        }

        return(
            <Flex className="list-item" key={rowData.id} onClick={()=>{this._gotoTopicDetail(rowData.id)}}>
                <Flex.Item>
                    <Flex direction="column" justify="around" align="start">
                        <span style={{fontSize:"18px"}}>{rowData.title}</span>
                        <span style={{color:"#999"}}>{`${rowData.commentNum || 0}条吐槽  ${rowData.like}个赞`}</span>
                    </Flex>
                </Flex.Item>
                {imageUrl?<img className="list-item-img" src={imageUrl}/>:null}
            </Flex>
        )
    }


    /***
     * 跳转到话题详情页
     * @private
     */
    _gotoTopicDetail(id){
        history.push(`/topic/${id}`);
    }



    render() {
        return (
            <div>
                <Header/>
                <div className="rn-home-div">
                    <WhiteSpace/>
                    <MyListView url="/topic/queryList"
                                method="GET"
                                pageSize={10}
                                needToken={false}
                                renderRow={this._renderItem}
                                renderSeparator = {()=>{
                                    return(
                                        <WhiteSpace className="list-item-separator"/>
                                    )
                                }}/>
                </div>

            </div>
        );
    }
}