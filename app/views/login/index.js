/**
 * Created by zhanglin on 2018/2/5.
 */

import React, {Component} from "react";
import {Button, Checkbox, InputItem} from "antd-mobile";
import webapi from './webapi';
import "./index.less";
import CommonInfo from '../../util/CommonInfo';


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phone:'',
            password:''

        };
        this.nowToRegister = this.nowToRegister.bind(this);
        this._phoneOnChange = this._phoneOnChange.bind(this);
        this._passwordOnChange = this._passwordOnChange.bind(this);
        this._loginClick = this._loginClick.bind(this);

    }


    _phoneOnChange(value){
        this.setState({
            phone:value
        })
    }

    _passwordOnChange(value){
        this.setState({
            password:value
        })
    }

    /***
     * 登录
     * @private
     */
    _loginClick(){

        webapi.login(this.state.phone,this.state.password).then((response)=>{
            console.log("登录结果 == ",response)

            //保存用户信息
            CommonInfo.saveLoginInfo(response);

        })
    }


    render() {
        return (
            <div className="login-div">

                <div className="login-header">登录</div>

                <div className="login-center">

                    <InputItem placeholder="请输入手机号" value={this.state.phone} onChange={this._phoneOnChange}>
                        <i className="fa fa-phone"/>
                    </InputItem>

                    <InputItem type="password"
                               placeholder="请输入密码"
                               value={this.state.password}
                               onChange={this._passwordOnChange}>
                        <i className="fa fa-lock "/>
                    </InputItem>


                    <Checkbox.AgreeItem className="login-check"
                                        onChange={e => console.log('checkbox', e)}>
                        记住账号
                    </Checkbox.AgreeItem>

                    <Button type="primary" className="login-button" onClick={this._loginClick}>登录</Button>


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