/**
 * Created by zhouxin on 2018/2/7.
 */
import React, {Component} from "react";
import "./index.less";
import {InputItem, List, TextareaItem,Toast,ImagePicker} from "antd-mobile";
import Header from "../component/header";
import webApi from "./webapi";


const Item = List.Item;

const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
}, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
}];
export default class PostTheme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            files: data,
            multiple: false,
        }
        this.uploadImg = this.uploadImg.bind(this);
        this.postTheme = this.postTheme.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeBody = this.changeBody.bind(this)
    }

    componentDidMount() {


    }

    onChange(files, type, index){
        console.log(files, type, index);
        this.setState({
            files,
        });
    }
    onSegChange(e){
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
            multiple: index === 1,
        });
    }

    render() {

        const { files } = this.state;
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
                         <ImagePicker
                             files={files}
                             onChange={this.onChange}
                             onImageClick={(index, fs) => console.log(index, fs)}
                             selectable={files.length < 5}
                             multiple={true}
                         />
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