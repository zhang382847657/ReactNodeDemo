/**
 * Created by zhanglin on 2018/2/5.
 */

import React, {Component} from 'react';
import {Flex, WhiteSpace, InputItem} from 'antd-mobile';
import './index.less';


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {}


    }


    render() {
        return (
            <div className='rn-login'>


                <div className="login-header">登录</div>

                <InputItem className="login-input"
                           placeholder="请输入用户名">
                    <div className="left-icon" style={{backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)'}}/>
                </InputItem>

                <InputItem className="login-input"
                           placeholder="请输入密码">
                    <div className="left-icon" style={{backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)'}}/>
                </InputItem>


            </div>
        );
    }
}