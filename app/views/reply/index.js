/**
 * Created by zhouxin on 2018/2/7.
 */
import React, {Component} from "react";
import "./index.less";
import {Icon, List, NavBar,TextareaItem} from "antd-mobile";




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
               <div>
                   <NavBar
                       className="navbar"
                       mode="light"
                       icon={<Icon type="left"/>}
                       onLeftClick={() => console.log('onLeftClick')}
                       rightContent={"评论"}
                   >这里显示回复的主题名称</NavBar>
               </div>

                <div className="content">
                    <h3>消息内容</h3>
                    <TextareaItem
                        rows={7}
                        placeholder="用力去吐槽吧"
                    ></TextareaItem>
                </div>

                <div className="img-d">

                    <img  className="img" src="http://bpic.588ku.com/element_origin_min_pic/16/12/21/ae22f84fcb221271dd306f77cf38073c.jpg"/>

                </div>

            </div>
        )
    }

}