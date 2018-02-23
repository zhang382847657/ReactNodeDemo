/**
 * Created by zhanglin on 2018/2/23.
 */

import React, {Component} from "react";
import {Icon, InputItem, List, NavBar} from "antd-mobile";
import createHashHistory from "history/createHashHistory";
import "./index.less";
const history = createHashHistory();

export default class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <NavBar id="topHeight"
                    className="rn-home-navbar"
                    mode="dark"
                    rightContent={this.props.navBarRight}
                    icon={<Icon type="left" className="icon-left"/>}
            >

                <List className='header-search'>
                    <InputItem className="search-title" placeholder="请输入搜索内容" clear onChange={this.props.changeBody}>
                        <i className="fa fa-search search-icon"/>
                    </InputItem>
                </List>
            </NavBar>
        )
    }



}