/**
 * Created by zhouxin on 2018/2/7.
 */
import React, {Component} from "react";
import "./index.less";
import {InputItem, List, TextareaItem,Toast, ImagePicker,WhiteSpace} from "antd-mobile";
import WxImageViewer from 'react-wx-images-viewer';
import Header from "../component/header";
import webApi from "./webapi";
import FileUpload from '../../util/fileUpload';

export default class PostTheme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            files:[], //上传图片数组
            isOpen:false, //是否打开图片浏览
            currentSelectIndex:0, //当前选中要浏览图片的下标
        };

        this._postTheme = this._postTheme.bind(this);
        this._imageOnChange = this._imageOnChange.bind(this);
        this._imageOnClick = this._imageOnClick.bind(this);
        this._imagePickerClose = this._imagePickerClose.bind(this);
    }

    componentDidMount() {


    }

    /**
     * 图片改变
     * @param files
     * @param type
     * @param index
     * @private
     */
    _imageOnChange(files, type, index){
        this.setState({
            files:files,
        });
    }

    /**
     * 图片点击
     * @param index 图片下标
     * @param fs  所有图片
     * @private
     */
    _imageOnClick(index, fs){

        console.log("图片被点击 == ",index,fs);
        this.setState({
            currentSelectIndex:index,
            isOpen: true
        });

    }


    /**
     * 图片浏览关闭
     * @private
     */
    _imagePickerClose(){
        this.setState({
            isOpen: false
        })
    }


    /**
     * 发布话题
     * @private
     */
    _postTheme() {

        let that = this;

        // if (this.state.title == "") {
        //     Toast.info("请输入标题", 1);
        //     return;
        // }
        //
        // if (this.state.content == "") {
        //     Toast.info("请输入内容", 1);
        //     return;
        // }

        // webApi.posttheme(this.state.title,this.state.content).then(((response) => {
        //     Toast.info("发布成功啦", 1);
        //     that.setState({
        //         title:"",
        //         content:"",
        //         files:[]
        //     });
        //
        //     setTimeout(()=>{
        //         that.props.history.goBack();
        //     },1000)
        //
        // }))


        // FileUpload('/upload',this.state.files[0].url)
        //     .then( res=>{
        //         //请求成功
        //         console.log("res == ",res);
        //         // if(res.header.statusCode == 'success'){
        //         //     //这里设定服务器返回的header中statusCode为success时数据返回成功
        //         //     upLoadImgUrl = res.body.imgurl;  //服务器返回的地址
        //         // }else{
        //         //     //服务器返回异常，设定服务器返回的异常信息保存在 header.msgArray[0].desc
        //         //     console.log(res.header.msgArray[0].desc);
        //         // }
        //     }).catch( err=>{
        //         console.log("error == ",err);
        //     //请求失败
        // })

        FileUpload('/upload',this.state.files[0].url,(file, responseText)=>{
            //这里是成功的回调
            console.log("成功的回调 == ",file, responseText);
        },(file)=>{
            //这里是删除的回调
            console.log("删除的回调 == ",file);
        },(file, responseText)=>{
            //这里是失败的回调
            console.log("失败的回调 == ",file, responseText);
        },(file, loaded, total, idx)=>{
            //这里是上传进度的回调
            console.log("上传进度的回调 == ",file, loaded, total, idx);
            // let percent = (loaded / total * 100).toFixed(2) + '%';
            // let _progress = this.state.progress;
            // _progress[idx] = percent;
            // this.setState({ progress: _progress })  // 反馈到DOM里显示
        }).then((response)=>{
            console.log("response == ",response);
        })
    }


    render() {

        let pickerImage = [];
        this.state.files.map(function (value,index) {
            pickerImage.push(value.url);
        });

        return (
            <div>

                <Header navBarText="发布主题" navBarRight={<i className="iconfont" onClick={this._postTheme}>&#xe62f;</i>}/>

                <div className="postTheme">

                    <WhiteSpace />

                    <List renderHeader={() => '标题'}>
                        <InputItem maxLength={40}
                                   placeholder="请输入标题"
                                   onChange={(v)=>{this.setState({title:v})}}/>

                    </List>

                    <WhiteSpace />

                    <List renderHeader={() => '内容'}>
                        <TextareaItem
                            rows={5}
                            count={2000}
                            placeholder="请输入内容"
                            onChange={(v)=>{this.setState({content:v})}}/>
                    </List>

                    <WhiteSpace />

                    <List renderHeader={() => '添加图片'}>
                        <ImagePicker files={this.state.files}
                                     onChange={this._imageOnChange}
                                     onImageClick={this._imageOnClick}
                                     selectable={this.state.files.length < 5}
                                     multiple={true}/>
                    </List>

                </div>

                {
                    this.state.isOpen ?
                        <WxImageViewer onClose={this._imagePickerClose}
                                       urls={pickerImage}
                                       index={this.state.currentSelectIndex}/> : null
                }

            </div>

        )

    }


}