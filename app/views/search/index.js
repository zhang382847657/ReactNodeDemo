/**
 * Created by zhouxin on 2018/2/6.
 */
import React, {Component} from "react";
import "./index.less";
import {Icon, InputItem, List, NavBar} from "antd-mobile";


const Item = List.Item;

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {


    }


    render() {
        return (
            <div className="overall">
                <div >
                    <NavBar
                        className="navbar"
                        mode="light"
                        icon={<Icon type="left"/>}
                        onLeftClick={() => console.log('onLeftClick')}
                        rightContent={[
                            <Icon key="0" type="search" style={{marginRight: '16px'}}/>,

                        ]}
                    >
                        <InputItem
                            clear
                            placeholder="请输入要查找话题"
                        />
                    </NavBar>
                </div>

                <div className="hot-search">
                    <h1>吐槽热搜</h1>
                    <div className="hot-search-list">
                        <span><i className="fa fa-free-code-camp hot-search-icon"></i>土木三八班偶同学1</span>
                        <span>跳一跳攻略</span>
                        <span>美国禁止华为</span>
                        <span ><i className="fa fa-heartbeat hot-search-icon"></i>前任攻略3</span>
                        <span>哈哈哈哈哈哈哈哈</span>
                        <span>标题啦标题啦</span>
                    </div>
                </div>

                <div className="history-search">
                    <h1>搜索历史</h1>
                    <div className="history-search-list">
                        <ul>
                            <li>
                                <i className="fa fa-calendar-o history-icon-time"></i>生活中有哪些让你让你拍案叫绝的小技巧<Icon
                                type="cross" className="close" size="xs"/>
                            </li>
                            <li>
                                <i className="fa fa-calendar-o history-icon-time"></i>如何看到金田和张继科的恋爱？<Icon type="cross"
                                                                                                          className="close"
                                                                                                          size="xs"/>
                            </li>
                            <li>
                                <i className="fa fa-calendar-o history-icon-time"></i>二战中细思极恐的细节！！<Icon type="cross"
                                                                                                        className="close"
                                                                                                        size="xs"/>
                            </li>

                        </ul>

                    </div>
                </div>

                <div className="">


                </div>

            </div>

        )


    }

}