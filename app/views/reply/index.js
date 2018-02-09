/**
 * Created by zhouxin on 2018/2/7.
 */
import React, {Component} from "react";
import "./index.less";
import {Icon, List, NavBar,TextareaItem} from "antd-mobile";
import Header from "../component/header";




export default class Reply extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {


    }

    render() {

        return (
            <div className="reply">
                <Header navBarText="吐槽" navBarRight={"评论"}/>

                <div className="content">
                    <TextareaItem
                        rows={7}
                        placeholder="用力去吐槽吧"
                    />
                </div>

                <div className="img-d">

                    <img  className="img" src="http://bpic.588ku.com/element_origin_min_pic/16/12/21/ae22f84fcb221271dd306f77cf38073c.jpg"/>

                </div>

            </div>
        )
    }

}