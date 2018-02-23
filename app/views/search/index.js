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
    }


    componentDidMount() {


    }


    /**
     * 删除当前的搜索记录
     * @param index 被删除数据的下表
     * @private
     */
    _deleteHistorySearch(index){

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
     * 绘制搜索历史记录
     * @return {XML}
     * @private
     */
    _renderSearchHistory(){
        let that = this;

        let views = this.state.searchHistoryArray && this.state.searchHistoryArray.map(function (value,key) {
            return(
                <List.Item>
                    <i className="fa fa-calendar-o"/>
                    {value}
                    <Icon type="cross" className="close" size="xs" onClick={()=>{that._deleteHistorySearch(key)}}/>
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
                        <span><i className="fa fa-free-code-camp hot-search-icon"/>土木三八班偶同学1</span>
                        <span><i className="fa fa-free-code-camp hot-search-icon"/>跳一跳攻略</span>
                        <span><i className="fa fa-free-code-camp hot-search-icon"/>美国禁止华为</span>
                        <span ><i className="fa fa-free-code-camp hot-search-icon"/>前任攻略3</span>
                        <span><i className="fa fa-free-code-camp hot-search-icon"/>哈哈哈哈哈哈哈哈</span>
                        <span><i className="fa fa-free-code-camp hot-search-icon"/>标题啦标题啦</span>
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