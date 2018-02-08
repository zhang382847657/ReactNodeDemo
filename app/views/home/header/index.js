/**
 * Created by zhanglin on 2018/2/7.
 */

import React, { Component} from 'react';
import {NavBar,Flex} from 'antd-mobile';
import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();

import './index.less';

export default class Header extends Component{
    constructor(props){
        super(props);
        this._searchClick = this._searchClick.bind(this);
    }

    render(){
        return (
            <NavBar id="topHeight" className="rn-home-navbar"
                    mode="dark"
                    rightContent={[
                        <i key="fabiao" className="fa fa-edit edit-icon"/>
                    ]}
            >
                <Flex className='header-search' justify="center" onClick={this._searchClick}>
                    <i className="fa fa-search search-icon"/>
                    <span className="search-title">搜索</span>
                </Flex>

            </NavBar>
        )
    }

    _searchClick(){
        history.push("/search");
    }
}