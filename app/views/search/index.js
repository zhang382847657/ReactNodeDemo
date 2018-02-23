/**
 * Created by zhouxin on 2018/2/6.
 */
import React, {Component} from "react";
import "./index.less";
import {Icon, InputItem, List, NavBar} from "antd-mobile";
import Header from './header/index';


const Item = List.Item;

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this._deleteHistorySearch = this._deleteHistorySearch.bind(this);
    }

    componentDidMount() {


    }


    /**
     * 删除当前的搜索记录
     * @private
     */
    _deleteHistorySearch(){

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
                        <List.Item>
                            <i className="fa fa-calendar-o"/>
                            生活中有哪些让你让你拍案叫绝的小技巧
                            <Icon type="cross" className="close" size="xs" onClick={this._deleteHistorySearch}/>
                        </List.Item>
                        <List.Item>
                            <i className="fa fa-calendar-o"/>
                            如何看到金田和张继科的恋爱？
                            <Icon type="cross" className="close" size="xs"/>
                        </List.Item>
                        <List.Item>
                            <i className="fa fa-calendar-o"/>
                            二战中细思极恐的细节！！
                            <Icon type="cross" className="close" size="xs"/>
                        </List.Item>
                    </List>
                </div>

            </div>

        )


    }

}