/**
 * Created by zhouxin on 2018/2/11.
 */


import React, {Component} from "react";
import "./index.less";
import {Flex} from "antd-mobile";
import createHashHistory from "history/createHashHistory";
import Header from "../../component/header";
import webApi from "./webapi";
const history = createHashHistory();

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
export default class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: []
        }
        this._gotoTopicDetail = this._gotoTopicDetail.bind(this)


    }

    componentDidMount() {
        webApi.searchResult(this.props.match.params.topic).then((response) => {
            this.setState({
                searchResult: response
            })
        })



    }



    /***
     * 跳转到话题详情页
     * @private
     */
    _gotoTopicDetail(){
        history.push("/topic");
    }

    renderList() {
        let renderList = [];
        this.state.searchResult.map((value, index) => {
            index++
            renderList.push(
                <Flex align="start" className="list" key={index} onClick={this._gotoTopicDetail}>
                    <Flex.Item className="item-title">
                        <div className="item-title-subset">{value.title}</div>
                        <p>{value.content}</p>
                        <p>565赞同 * 117评论</p>
                    </Flex.Item>
                    {/*<Flex.Item className="item-img">*/}
                        {/*<img src={value.img}/>*/}
                    {/*</Flex.Item>*/}
                </Flex>
            )
        })
        return renderList;

    }

    render() {
        return (
            <div >
                <Header navBarText="搜索到的主题" />

                <div className="searchResult">
                    <div></div>
                    <div>
                        {this.renderList()}
                    </div>
                </div>
            </div>


        )


    }

}