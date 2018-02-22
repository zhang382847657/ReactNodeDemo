/**
 * Created by zhouxin on 2018/2/5.
 */
import React, {Component} from "react";
import "./index.less";
import {Button, InputItem, Radio, Toast} from "antd-mobile";
import webApi from "./webapi";


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            password: "",
            confirmPassword: "",
            agreeRegister: false

        }
        this.register = this.register.bind(this);
        this.goToLogin = this.goToLogin.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
        this.passWordChange = this.passWordChange.bind(this);
        this.confirmpassWordChange = this.confirmpassWordChange.bind(this);
        this.clickAgreeRegister = this.clickAgreeRegister.bind(this);



    }

    componentDidMount() {


    }


    render() {
        return (
            <div >
                <div className="from">
                    <h3 className="title">注册</h3>
                </div>


                <div className="write-data">
                    <InputItem
                        className="inp"
                        placeholder="手机号"
                        maxLength={11}
                        moneyKeyboardAlign="left"
                        onChange={this.phoneChange}
                    >
                        <img className="image" src="https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png"/>
                    </InputItem>
                    <InputItem
                        className="inp"
                        placeholder="请输入密码"
                        moneyKeyboardAlign="left"
                        maxLength={11}
                        type="password"
                        onChange={this.passWordChange}
                    > <img className="image"
                           src="https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png"/></InputItem>
                    <InputItem
                        className="inp"
                        placeholder="请再次输入密码"
                        maxLength={11}
                        type="password"
                        moneyKeyboardAlign="left"
                        onChange={this.confirmpassWordChange}
                    > <img className="image"
                           src="https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png"/></InputItem>

                    <Radio className="my-radio" checked={this.state.agreeRegister} onChange={this.clickAgreeRegister}>同意注册条款</Radio>
                    <Button type="primary" className="button" onClick={this.register}>注册</Button>
                    <div className="login" onClick={this.goToLogin}>登录</div>
                </div>
            </div>
        )


    }


    clickAgreeRegister() {
        let agreeRegister = this.state.agreeRegister;
        console.log("agreeRegister:", agreeRegister)
        this.setState({
            agreeRegister: !agreeRegister
        })
    }

    goToLogin() {
        this.props.history.push("login")
    }

    /**手机号码改变事件*/
    phoneChange(e) {
        this.setState({
            phone: e
        })
    }

    /**密码改变事件*/
    passWordChange(e) {
        this.setState({
            password: e
        })
    }

    /**确认密码改变事件*/
    confirmpassWordChange(e) {
        this.setState({
            confirmPassword: e
        })
    }

    /**注册*/
    register() {
        let phone = this.state.phone;
        console.log("phone==>", phone)
        if (!/^1\d{10}$/.test(phone)) {
            Toast.info("手机号码未填或者不正确", 1);
            return;
        }

        if (this.state.password == "") {
            Toast.info("请输入密码", 1);
            return;
        }

        if (this.state.confirmPassword == "") {
            Toast.info("请输入确认密码", 1);
            return;
        }

        if (this.state.confirmPassword != this.state.password) {
            Toast.info("密码不一致", 1);
            return;
        }

        webApi.register(this.state.phone, this.state.password).then((response) => {
            Toast.info("注册成功,快去登录吧", 1);
            this.setState({
                phone: "",
                password: "",
                confirmPassword: "",
                agreeRegister: false
            });
            setTimeout(()=>{
                this.props.history.push("login")
            },1000)

        })

    }
}