/**
 * Created by zhanglin on 2018/2/5.
 */
import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {NavBar,Icon} from 'antd-mobile';

import './index.less';

export default class Header extends Component{
    constructor(props){
        super(props);
    }
    _handleOnLeftClick(){
        console.log("点击了返回");
        if(this.props.navBarLeftIcon == "true"){
            window.history.go(-1)
        }
    }
    render(){
        return (
            <NavBar id="topHeight" className="rn-navbar-header"
                    mode="dark"
                    onLeftClick = {this._handleOnLeftClick.bind(this)}
                    icon={this.props.navBarLeftIcon == 'true' ? <Icon type="left" className="icon-left"/>:''}
                    leftContent={this.props.navBarLeft}
                    rightContent={this.props.navBarRight}>
                {this.props.navBarText}
            </NavBar>
        )
    }
}

Header.propTypes = {
    navBarLeftIcon:PropTypes.string, //是否展示左侧箭头
    navBarLeft:PropTypes.any, //自定义左侧内容视图
    navBarRight:PropTypes.any, //自定义右侧内容视图
    navBarText:PropTypes.string, //导航标题
};


Header.defaultProps = {
    navBarLeftIcon:"true"
};