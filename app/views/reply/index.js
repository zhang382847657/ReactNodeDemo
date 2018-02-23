/**
 * Created by zhouxin on 2018/2/7.
 */
import React, {Component} from "react";
import "./index.less";
import {Icon, List, NavBar,TextareaItem, Flex, Toast} from "antd-mobile";
import Header from "../component/header";
import webapi from './webapi';
import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();




export default class Reply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content:null
        };

        this._onSend = this._onSend.bind(this);

    }

    componentDidMount() {


    }

    /***
     * 发表吐槽
     * @private
     */
    _onSend(){

        if(this.state.content == null || this.state.content == ""){
            Toast.info('请输入吐槽内容！', 1);
            return;
        }

        webapi.sendComment(this.props.match.params.id,this.state.content).then((response)=>{
            console.log("发表吐槽结果 == ",response);
            history.goBack();
        })
    }


    render() {

        return (
            <div className="reply">
                <Header navBarText="吐槽" navBarRight={<i className="iconfont" onClick={this._onSend}>&#xe62f;</i>}/>

                <div className="content">
                    <TextareaItem value={this.state.content}
                                  rows={7}
                                  count={200}
                                  placeholder="用力去吐槽吧"
                                  onChange={(v)=>{this.setState({content:v})}}/>
                </div>

                <div className="img-d">

                    <img  className="img" src="http://bpic.588ku.com/element_origin_min_pic/16/12/21/ae22f84fcb221271dd306f77cf38073c.jpg"/>

                </div>

            </div>
        )
    }

}