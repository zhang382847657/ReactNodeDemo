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



const dataSource = [
    {
        id:"0",
        time:"2018-02-08 11:14",
        content:"多了俩敬业福，换和谐福~换的宝宝请私聊我哦！",
    },
    {
        id:"1",
        time:"2018-02-08 10:59",
        content:"好几个手机到处扫，多了3张敬业福和8张爱国福，想要和谐~有换的吗？请Q1",
    },
    {
        id:"2",
        time:"2018-02-07 21:06",
        content:"今天平常东奥运会开幕，你可以小，但不恶意被小看！谢谢你让我在凌晨看见这个视频，泪奔~，可能人生不一样，O(∩_∩)O哈哈~ 有时候真的需要激励一下自己哦",
    },
    {
        id:"3",
        time:"2018-02-07 20:01",
        content:"我IEUR设计费离开家离开家，，微乳昆仑决否！！我；；；；；可适当减肥 机咯已我UI偶偶日无偶IEUR围殴如 ！！，索拉卡的积分老姐姐了困了就睡发电量见识到了看风景了看记得放就  ",
    },
    {
        id:"4",
        time:"2018-02-06 17:34",
        content:"韖我流口水就离开家么么么么， 微乳说了防静电坡外耳流口水就饭！我IEUR离我家逻辑？？我忘了URL蓝思科技发流口水就的浪费口舌街坊邻居索拉卡的积分老实交代佛我我饿UR考虑到双方均蓝思科技饭",
    }, {
        id:"5",
        time:"2018-02-08 11:14",
        content:"多了俩敬业福，换和谐福~换的宝宝请私聊我哦！",
    },
    {
        id:"6",
        time:"2018-02-08 10:59",
        content:"好几个手机到处扫，多了3张敬业福和8张爱国福，想要和谐~有换的吗？请Q1",
    },
    {
        id:"7",
        time:"2018-02-07 21:06",
        content:"今天平常东奥运会开幕，你可以小，但不恶意被小看！谢谢你让我在凌晨看见这个视频，泪奔~，可能人生不一样，O(∩_∩)O哈哈~ 有时候真的需要激励一下自己哦",
    },
    {
        id:"8",
        time:"2018-02-07 20:01",
        content:"我IEUR设计费离开家离开家，，微乳昆仑决否！！我；；；；；可适当减肥 机咯已我UI偶偶日无偶IEUR围殴如 ！！，索拉卡的积分老姐姐了困了就睡发电量见识到了看风景了看记得放就  ",
    },
    {
        id:"9",
        time:"2018-02-06 17:34",
        content:"韖我流口水就离开家么么么么， 微乳说了防静电坡外耳流口水就饭！我IEUR离我家逻辑？？我忘了URL蓝思科技发流口水就的浪费口舌街坊邻居索拉卡的积分老实交代佛我我饿UR考虑到双方均蓝思科技饭",
    }
];

export default class Topic extends Component {
    constructor(props) {
        super(props);

        this.state={

        };


        this._renderItem = this._renderItem.bind(this);
        this._zanClick = this._zanClick.bind(this);
        this._tucaoClick = this._tucaoClick.bind(this);
        this._renderHeader = this._renderHeader.bind(this);

    }

    componentDidMount() {



    }

    _renderHeader(){
        return(
            <div>
                <Flex className="rn-topic-content" direction="column">
                    <span className="content-title">裕华区裕东街道人大代表之家和金马五社区联合开展了“送福到万家”活动 </span>
                    <span className="content-content">日前，裕华区裕东街道人大代表之家和金马五社区联合开展了“送福到万家”活动，人大代表和书法爱好者一起挥毫泼墨，为社区的空巢老人、低保户、计生特殊家庭等书写春联和福字，并为他们献上节日的美好祝愿。本报首席记者 张震 摄</span>
                    <img className="content-img" src="http://sjzrb.sjzdaily.com.cn/res/1/1/2018-02/08/08/res03_attpic_brief.jpg"/>
                    <img className="content-img" src="http://sjzrb.sjzdaily.com.cn/res/1/1/2018-02/08/08/res05_attpic_brief.jpg"/>
                </Flex>

                <WhiteSpace/>

                <Flex className="rn-topic-comment-title">
                    <span>赞 876</span>
                    <span className="comment-title">评论 2008</span>
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
        history.push('/topic/reply');
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
                            url="http://"
                            method="GET"
                            pageSize={10}
                            dataSource={dataSource}
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