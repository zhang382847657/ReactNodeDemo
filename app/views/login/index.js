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
                    placeholder="请输入用户名"
                >
                    <div style={{
                        backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)',
                        backgroundSize: 'cover',
                        height: '22px',
                        width: '22px'
                    }}/>
                </InputItem>

                <InputItem className="login-input"
                    placeholder="请输入密码"
                >
                    <div style={{
                        backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)',
                        backgroundSize: 'cover',
                        height: '22px',
                        width: '22px'
                    }}/>
                </InputItem>


            </div>
        );
    }
}