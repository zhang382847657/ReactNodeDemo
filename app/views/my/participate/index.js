
/**
 * Created by zhouxin on 2018/2/7.
 */

import React, {Component} from "react";
import "./index.less";
import {Flex, Icon, NavBar,WhiteSpace} from "antd-mobile";
import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();
import Header from "../../component/header";
import MyListView from '../../component/listview';


const dataList = [
    {
        title: "身边的人是网红是什么感受？",
        hot: 999,
        watch: 100,
        img: "http://bpic.588ku.com/element_origin_min_pic/18/01/15/0401742e5233d46352d8a8250a25044f.jpg"
    },
    {
        title: "很多公司开晨会喊口号这种模式跟谁学的？",
        hot: 5656,
        watch: 544,
        img: "http://bpic.588ku.com/back_pic/00/01/39/37560161933d89b.jpg!ww800"
    },
    {
        title: "终于去到喜欢多年的歌手演唱会是一种什么体验？",
        hot: 342,
        watch: 545,
        img: "http://bpic.588ku.com/back_pic/04/78/84/8258b44eb10aed7.jpg!ww800"
    },
    {
        title: "一千个制作者,就有一千种曲奇！为什么我们不一样",
        hot: 342,
        watch: 545,
        img: "http://bpic.588ku.com/back_pic/00/02/62/935619c550f2490.jpg!ww800"
    },
    {
        title: "身边的人是网红是什么感受？",
        hot: 999,
        watch: 100,
        img: "http://bpic.588ku.com/element_origin_min_pic/18/01/15/0401742e5233d46352d8a8250a25044f.jpg"
    },
    {
        title: "很多公司开晨会喊口号这种模式跟谁学的？",
        hot: 5656,
        watch: 544,
        img: "http://bpic.588ku.com/back_pic/00/01/39/37560161933d89b.jpg!ww800"
    },
    {
        title: "终于去到喜欢多年的歌手演唱会是一种什么体验？",
        hot: 342,
        watch: 545,
        img: "http://bpic.588ku.com/back_pic/04/78/84/8258b44eb10aed7.jpg!ww800"
    },
    {
        title: "一千个制作者,就有一千种曲奇！为什么我们不一样",
        hot: 342,
        watch: 545,
        img: "http://bpic.588ku.com/back_pic/00/02/62/935619c550f2490.jpg!ww800"
    },
    {
        title: "终于去到喜欢多年的歌手演唱会是一种什么体验？",
        hot: 342,
        watch: 545,
        img: "http://bpic.588ku.com/back_pic/04/78/84/8258b44eb10aed7.jpg!ww800"
    },
    {
        title: "一千个制作者,就有一千种曲奇！为什么我们不一样",
        hot: 342,
        watch: 545,
        img: "http://bpic.588ku.com/back_pic/00/02/62/935619c550f2490.jpg!ww800"
    }
]
export default class Participate extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this._renderItem = this._renderItem.bind(this);
        this._gotoTopicDetail = this._gotoTopicDetail.bind(this)
    }

    componentDidMount() {


    }



    /***
     * 跳转到话题详情页
     * @private
     */
    _gotoTopicDetail(){
        history.push("/topic");
    }


    _renderItem(rowData, sectionID, rowID){

        return(
            <Flex align="start" className="list" key={rowID} onClick={this._gotoTopicDetail}>
                <Flex.Item className="item">
                    <span className={parseInt(rowID) % 2 == 1 ? "sequence": "sequence1"}>{parseInt(rowID) > 9 ? parseInt(rowID) + 1 : "0" + parseInt(rowID)}</span>
                </Flex.Item>
                <Flex.Item className="item-title">
                    <div className="item-title-subset">{rowData.title}</div>
                    <p>{rowData.hot}万热度-{rowData.watch}万阅读</p>
                </Flex.Item>

                <Flex.Item className="item-img">
                    <img src={rowData.img}/>
                </Flex.Item>
            </Flex>
        )

    }


    render() {
        return (
            <div className="participate">
                <Header navBarText="我参与过的话题" />
                <div className="padding-div">

                    <MyListView url="http://"
                                method="GET"
                                pageSize={10}
                                dataSource={dataList}
                                renderRow={this._renderItem}/>

                </div>

            </div>


        )


    }

}