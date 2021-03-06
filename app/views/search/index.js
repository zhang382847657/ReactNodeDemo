/**
 * Created by zhouxin on 2018/2/6.
 */
import React, {Component} from "react";
import "./index.less";
import {Icon, List} from "antd-mobile";
import Header from "./header/index";
import CommonInfo from '../../util/CommonInfo';
import Constant from '../../util/Constant';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchHistoryArray: JSON.parse(CommonInfo.localStorage.getItem(Constant.SEARCHHISTORY)) //搜索记录
        };

        this._renderSearchHistory = this._renderSearchHistory.bind(this);
        this._deleteHistorySearch = this._deleteHistorySearch.bind(this);
        this._searchHistoryClick = this._searchHistoryClick.bind(this);
    }


    componentDidMount() {


    }


    /**
     * 删除当前的搜索记录
     * @param event 事件对象
     * @param index 被删除数据的下表
     * @private
     */
    _deleteHistorySearch(event,index){

        event.stopPropagation(); //阻止点击冒泡

        let tmp = this.state.searchHistoryArray;
        if(tmp){
            tmp.splice(index,1);
            CommonInfo.localStorage.setItem(Constant.SEARCHHISTORY,JSON.stringify(tmp));
            this.setState({
                searchHistoryArray:tmp
            });
        }

    }

    /**
     * 搜索历史点击
     * @param value 搜索历史内容
     * @private
     */
    _searchHistoryClick(value){
        var data = {search:value};
        var path = {
            pathname:'/searchResult',
            state:data,
        };
        this.props.history.push(path);
    }


    /**
     * 绘制搜索历史记录
     * @return {XML}
     * @private
     */
    _renderSearchHistory(){
        let that = this;

        let views = this.state.searchHistoryArray && this.state.searchHistoryArray.map(function (value,key) {
            return(
                <List.Item onClick={()=>{that._searchHistoryClick(value)}}>
                    <i className="fa fa-calendar-o"/>
                    {value}
                    <Icon type="cross" className="close" size="xs" onClick={(e)=>{that._deleteHistorySearch(e,key)}}/>
                </List.Item>
            )
        })

        if(this.state.searchHistoryArray && this.state.searchHistoryArray.length > 0){
            return views;
        }else{
            return(
                <List.Item>
                    暂无搜索记录
                </List.Item>
            )
        }

    }


    render() {
        return (
            <div className="overall">

                <Header history={this.props.history}/>


                <div className="hot-search">
                    <h1>吐槽热搜</h1>
                    <div className="hot-search-list">
                        <span><i className="fa fa-free-code-camp hot-search-icon"/>孙燕姿道歉</span>
                        <span><i className="fa fa-free-code-camp hot-search-icon"/>佟丽娅体重</span>
                        <span><i className="fa fa-free-code-camp hot-search-icon"/>董子健孙怡</span>
                        <span ><i className="fa fa-free-code-camp hot-search-icon"/>8款超好看的信用卡</span>
                        <span><i className="fa fa-free-code-camp hot-search-icon"/>小城市的富贵病</span>
                        <span><i className="fa fa-free-code-camp hot-search-icon"/>大连万达</span>
                    </div>
                </div>

                <div className="history-search">
                    <h1>搜索历史</h1>
                    <List>
                        {this._renderSearchHistory()}
                    </List>
                </div>
            </div>
        )
    }

}