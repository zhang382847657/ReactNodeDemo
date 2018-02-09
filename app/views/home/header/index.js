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
        this._topicClick = this._topicClick.bind(this);
    }

    render(){
        return (
            <NavBar id="topHeight" className="rn-home-navbar"
                    mode="dark"
                    rightContent={[
                        <i key="fabiao" className="fa fa-edit edit-icon" onClick={this._topicClick}/>
                    ]}
            >
                <Flex className='header-search' justify="center" onClick={this._searchClick}>
                    <i className="fa fa-search search-icon"/>
                    <span className="search-title">搜索</span>
                </Flex>

            </NavBar>
        )
    }

    /**
     * 搜索
     * @private
     */
    _searchClick(){
        history.push("/search");
    }

    /***
     * 发布话题
     * @private
     */
    _topicClick(){
        history.push("/posttheme");
    }
}