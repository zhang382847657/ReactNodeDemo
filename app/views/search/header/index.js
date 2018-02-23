/**
 * Created by zhanglin on 2018/2/23.
 */

import React, { Component} from 'react';
import {NavBar,InputItem,List,Icon} from 'antd-mobile';

import './index.less';

export default class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            search:'' //搜索内容
        };

        this._goBack = this._goBack.bind(this);
        this._searchClick = this._searchClick.bind(this);

    }

    /***
     * 返回上一页
     * @private
     */
    _goBack(){
        this.props.history.goBack();
    }


    /**
     * 搜索
     * @private
     */
    _searchClick(){

        var data = {search:this.state.search};
        var path = {
            pathname:'/searchResult',
            state:data,
        };

        this.props.history.push(path);
    }



    render(){
        return (
            <NavBar id="topHeight"
                    className="rn-home-navbar"
                    mode="dark"
                    icon={<Icon type="left" className="icon-left" onClick={this._goBack}/>}
                    rightContent={ this.state.search.length > 0 ? <div onClick={this._searchClick}>搜索</div> : null} >

                <List className='header-search'>
                    <InputItem className="search-title"
                               placeholder="请输入搜索内容"
                               clear
                               value={this.state.search}
                               onChange={(v)=>{this.setState({search:v})}}>
                        <i className="fa fa-search search-icon"/>
                    </InputItem>
                </List>

            </NavBar>
        )
    }


}