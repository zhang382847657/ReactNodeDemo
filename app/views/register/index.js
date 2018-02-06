/**
 * Created by zhouxin on 2018/2/5.
 */
import React, {Component} from "react";
import "./index.less";
import {Button, InputItem, Radio, WhiteSpace} from "antd-mobile";


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                        placeholder="姓名"
                        moneyKeyboardAlign="left"
                    >
                        <img className="image" src="https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png"/>
                    </InputItem>
                    <InputItem
                        className="inp"
                        placeholder="请输入邮箱"
                        moneyKeyboardAlign="left"
                    > <img className="image"
                           src="https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png"/></InputItem>
                    <InputItem
                        className="inp"
                        placeholder="请输入密码"
                        moneyKeyboardAlign="left"
                    > <img className="image"
                           src="https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png"/></InputItem>
                    <InputItem
                        className="inp"
                        placeholder="请再次输入密码"
                        moneyKeyboardAlign="left"
                    > <img className="image"
                           src="https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png"/></InputItem>

                    <Radio className="my-radio">同意注册条款</Radio>
                    <Button type="primary" className="button">注册</Button>

                    <h3 className="login">登录</h3>
                </div>
            </div>
        )


    }
}