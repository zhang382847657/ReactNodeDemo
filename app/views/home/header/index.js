/**
 * Created by zhanglin on 2018/2/7.
 */

import React, { Component} from 'react';
import {NavBar,InputItem} from 'antd-mobile';

import './index.less';

export default class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <NavBar id="topHeight" className="rn-home-navbar"
                    mode="dark"
                    rightContent={[
                        <i key="fabiao" className="fa fa-edit edit-icon"/>
                    ]}
            >
                <InputItem className='header-search'
                           clear
                           placeholder="请输入要查询的位置"
                           onChange={()=>{}}>
                    <i className="fa fa-search tab-bar-item-icon"/>
                </InputItem>
            </NavBar>
        )
    }
}