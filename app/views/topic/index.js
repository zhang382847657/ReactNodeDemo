/**
 * Created by zhanglin on 2018/2/6.
 */

import React, {Component} from 'react';
import {Flex, WhiteSpace,Icon,Button} from 'antd-mobile';
import MyListView from '../component/listview';
import Header from '../component/header';
import './index.less';
import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();
import webapi from './webapi';


export default class Topic extends Component {
    constructor(props) {
        super(props);

        this.state={
            topic:{}
        };


        this._renderItem = this._renderItem.bind(this);
        this._zanClick = this._zanClick.bind(this);
        this._tucaoClick = this._tucaoClick.bind(this);
        this._renderHeader = this._renderHeader.bind(this);

    }

    componentDidMount() {

        let that = this;
        webapi.topicDetail(this.props.match.params.id).then((response)=>{
            console.log("话题详情 == ",response);
            that.setState({
                topic:response
            })
        })

    }

    _renderHeader(){

        let imageViews = null;
        if(this.state.topic.images){
            imageViews = this.state.topic.images.split(',').map(function (value,index) {
                return(
                    <img className="content-img" src={value}/>
                )
            })
        }

        return(
            <div>
                <Flex className="rn-topic-content" direction="column">
                    <span className="content-title">{this.state.topic.title} </span>
                    <span className="content-content">{this.state.topic.content}</span>
                    {imageViews}
                </Flex>

                <WhiteSpace/>

                <Flex className="rn-topic-comment-title">
                    <span>赞 {this.state.topic.like}</span>
                    <span className="comment-title">吐槽 0</span>
                </Flex>
            </div>
        )
    }

    _renderItem(rowData, sectionID, rowID){

        return (
            <Flex className="rn-topic-comment-content" direction="column" align="start" key={rowData.id}>
                <Flex.Item className="comment-content-title">
                    <Flex>
                        <Flex.Item>{rowID}楼</Flex.Item>
                        <Flex.Item className="time">{rowData.time}</Flex.Item>
                    </Flex>
                </Flex.Item>
                <Flex.Item className="comment-content-content">{rowData.content}</Flex.Item>
                <div className="line"/>
            </Flex>
        )
    }

    /**
     * 吐槽
     * @private
     */
    _tucaoClick(){
        console.log("跳转到吐槽页");
        history.push(`/topic/reply/${this.props.match.params.id}`);
    }

    /***
     * 点赞
     * @private
     */
    _zanClick(){

    }


    render() {
        return (
            <div className="rn-topic">
                <Header navBarText="详情" navBarLeftIcon="true"/>

                <MyListView className="rn-topic-content-div"
                            url="/comment/queryList"
                            method="GET"
                            pageSize={10}
                            param={{id:this.props.match.params.id}}
                            needToken={false}
                            renderRow={this._renderItem}
                            renderHeader={this._renderHeader}
                />

                <Flex className="rn-topic-bottom">
                    <Flex.Item className="bottom-item-comment">
                        <Button icon={<i className="fa fa-hand-lizard-o tab-bar-item-icon"/>}
                                onClick={this._tucaoClick}>吐槽</Button>
                    </Flex.Item>
                    <Flex.Item className="bottom-item-zan">
                        <Button icon={<i className="fa fa-thumbs-o-up tab-bar-item-icon"/>}
                                onClick={this._zanClick}>点赞</Button>
                    </Flex.Item>
                </Flex>


            </div>
        );
    }
}