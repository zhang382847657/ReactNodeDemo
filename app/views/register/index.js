/**
 * Created by zhouxin on 2018/2/5.
 */
/**
 * Created by zhanglin on 2018/2/5.
 */

import React, {Component} from 'react';
import {Flex, WhiteSpace, InputItem, Checkbox,Button} from 'antd-mobile';
import './index.less';


export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {}

        console.log("aaaaa");

    }


    render() {
        return (
            <div className='rn-login'>


                <div className="login-header">注册</div>

                <div className="login-center">

                    <InputItem className="login-input"
                               placeholder="请输入用户名">
                        <div className="left-icon" style={{backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)'}}/>
                    </InputItem>

                    <InputItem className="login-input"
                               placeholder="请输入密码">
                        <div className="left-icon" style={{backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)'}}/>
                    </InputItem>


                    <Checkbox.AgreeItem className="login-check"
                                        onChange={e => console.log('checkbox', e)}>
                        记住账号
                    </Checkbox.AgreeItem>

                    <Button type="primary" className="login-button">登录</Button>


                </div>


            </div>
        );
    }
}