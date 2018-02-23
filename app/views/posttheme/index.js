/**
 * Created by zhouxin on 2018/2/7.
 */
import React, {Component} from "react";
import "./index.less";
import {InputItem, List, TextareaItem,Toast} from "antd-mobile";
import Header from "../component/header";
import webApi from "./webapi";


const Item = List.Item;

export default class PostTheme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        }
        this.uploadImg = this.uploadImg.bind(this);
        this.postTheme = this.postTheme.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeBody = this.changeBody.bind(this)
    }

    componentDidMount() {


    }

    render() {
        return (
            <div className="posttheme">

                <div >
                    <Header navBarText="发布主题" navBarRight={<div onClick={this.postTheme}>发布</div>}/>
                </div>

             <div className="padding-div">
                 <div className="release">
                     <h3>标题</h3>
                     <InputItem maxLength={40}
                                placeholder="请输入标题"
                                onChange={this.changeTitle}
                     ></InputItem>

                 </div>

                 <div className="content">
                     <h3>消息内容</h3>
                     <TextareaItem
                         rows={5}
                         placeholder="请输入内容"
                         onChange={this.changeBody}
                     ></TextareaItem>

                 </div>

                 <div className="uploadImg">
                     <h3>上传图片</h3>
                     <div>
                         <img onClick={this.uploadImg} src="http://bpic.588ku.com/element_origin_min_pic/01/37/91/22573c685c2d130.jpg"
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
            </div>

        )


    }


    changeTitle(e) {
        this.setState({
            title: e
        })
    }

    changeBody(e) {
        console.log(e)
        this.setState({
            content: e
        })
    }

    uploadImg(){
        console.log("这边点击上传图片")
    }


    postTheme() {

        if (this.state.title == "") {
            Toast.info("请输入标题", 1);
            return;
        }
        if (this.state.content == "") {
            Toast.info("请输入内容", 1);
            return;
        }
        webApi.posttheme(this.state.title,this.state.content).then(((response) => {
            Toast.info("发布成功啦", 1);
            this.setState({
                title:"",
                content:""
            })

            setTimeout(()=>{
                this.props.history.push("/")
            },1000)

        }))
    }

}