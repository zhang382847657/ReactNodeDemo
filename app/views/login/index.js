/**
 * Created by zhanglin on 2018/2/5.
 */

import React, {Component} from "react";
import {Button, Checkbox, InputItem} from "antd-mobile";
import "./index.less";


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
        this.nowToRegister = this.nowToRegister.bind(this)

    }


    render() {
        return (
            <div className="login-div">

                <div className="login-header">登录</div>

                <div className="login-center">

                    <InputItem placeholder="请输入手机号">
                        <i className="fa fa-phone"/>
                    </InputItem>

                    <InputItem placeholder="请输入短信验证码">
                        <i className="fa fa-lock "/>
                    </InputItem>


                    <Checkbox.AgreeItem className="login-check"
                                        onChange={e => console.log('checkbox', e)}>
                        记住账号
                    </Checkbox.AgreeItem>

                    <Button type="primary" className="login-button">登录</Button>


                </div>

                <div className="nowRegister" onClick={this.nowToRegister}>立即注册</div>


            </div>
        );
    }

    /***
     * 立即去注册
     */
    nowToRegister(){
        this.props.history.push("register")
    }
}