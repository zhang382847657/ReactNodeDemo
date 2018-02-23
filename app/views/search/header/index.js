/**
 * Created by zhanglin on 2018/2/23.
 */

import React, { Component} from 'react';
import {NavBar,InputItem,List,Icon} from 'antd-mobile';
import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();

import './index.less';

export default class Header extends Component{
    constructor(props){
        super(props);

        this._goBack = this._goBack.bind(this);

    }

    /***
     * 返回上一页
     * @private
     */
    _goBack(){
        window.history.go(-1)
    }



    render(){
        return (
            <NavBar id="topHeight"
                    className="rn-home-navbar"
                    mode="dark"
                    icon={<Icon type="left" className="icon-left" onClick={this._goBack}/>} >

                <List className='header-search'>
                    <InputItem className="search-title" placeholder="请输入搜索内容" clear>
                        <i className="fa fa-search search-icon"/>
                    </InputItem>
                </List>

            </NavBar>
        )
    }


}