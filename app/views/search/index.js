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
                        <span>土木三八班偶同学1</span>
                        <span>跳一跳攻略</span>
                        <span>美国禁止华为</span>
                        <span>前任攻略3</span>
                        <span>哈哈哈哈哈哈哈哈</span>
                        <span>标题啦标题啦</span>
                    </div>
                </div>

                <div className="history-search">
                    <h1>搜索历史</h1>
                    <div className="history-search-list">
                        <ul>
                            <li>
                                朱九天半夜被爱仕达撒所多 <Icon type="cross" className="close" size="lg"/>
                            </li>
                            <li>
                                睡觉了哭过范集速度快盖浇饭多<Icon type="cross" className="close" size="lg"/>
                            </li>
                            <li>
                                屁哦屁哦皮皮欧派<Icon type="cross" className="close" size="lg"/>
                            </li>


                        </ul>

                    </div>
                </div>

            </div>

        )


    }

}