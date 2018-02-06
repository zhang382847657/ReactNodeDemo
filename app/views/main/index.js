/**
 * Created by zhanglin on 2018/2/5.
 */

import React, {Component} from 'react';

import {Flex, WhiteSpace, InputItem, Checkbox,Button} from 'antd-mobile';
import './index.less';


export default class Main extends Component {
    constructor(props) {
        super(props);
        console.log(this);
        console.log("tttt == ",this.props);
        this.state = {}


    }


    render() {
        return (
            <div className='rn-login'>


                <div className="login-header">首页</div>

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

                    <Button type="primary" className="login-button" onClick={()=>{
                       this.props.history.push("/login")
                    }}>登录</Button>


                </div>


            </div>
        );
    }
}