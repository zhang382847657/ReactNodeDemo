/**
 * Created by zhouxin on 2018/2/7.
 */
import React, {Component} from "react";
import "./index.less";
import {Icon, InputItem, List, NavBar, TextareaItem} from "antd-mobile";


const Item = List.Item;

export default class PostTheme extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {


    }

    render() {
        return (
            <div className="posttheme">

                <div >
                    <NavBar
                        className="navbar"
                        mode="light"
                        icon={<Icon type="left"/>}
                        onLeftClick={() => console.log('onLeftClick')}
                        rightContent={"发布"}
                    >发布主题</NavBar>
                </div>

                <div className="release">
                    <h3>标题</h3>
                    <InputItem
                        placeholder="请输入标题"
                    ></InputItem>

                </div>

                <div className="content">
                    <h3>消息内容</h3>
                    <TextareaItem
                        rows={5}
                        placeholder="请输入内容"
                    ></TextareaItem>

                </div>

                <div className="uploadImg">
                    <h3>上传图片</h3>
                    <div>
                        <img src="http://bpic.588ku.com/element_origin_min_pic/01/37/91/22573c685c2d130.jpg"
                             className="img"/>
                        <img
                            src="http://bpic.588ku.com//element_origin_min_pic/17/06/08/a97ecf04b2ec7bdd6fa29b2eeb57269f.jpg"
                            className="img"/>
                        <img
                            src="https://bpic.588ku.com/original_origin_min_pic/17/10/24/aedf399b9a25de0c2eaceed778072a3b.jpg"
                            className="img"/>
                        <img
                            src="https://bpic.588ku.com/original_origin_min_pic/17/10/24/aedf399b9a25de0c2eaceed778072a3b.jpg"
                            className="img"/>
                    </div>

                </div>
            </div>




        )


    }

}