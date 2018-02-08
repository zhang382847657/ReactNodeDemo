/**
 * Created by zhanglin on 2018/2/6.
 */

import React, {Component} from 'react';
import {Flex, WhiteSpace, InputItem, Checkbox,Button,NavBar,Icon,ListView,PullToRefresh} from 'antd-mobile';
import './index.less';
import Header from './header';
import MyListView from '../component/listview';


const dataSource = [
    {
        id:"0",
        title:"甄嬛传中有哪些细思极恐的细节？",
        content:"这里是正文，正文，正文，你看",
        commentNum:130,
        zanNum:200,
        img:"http://pic.58pic.com/58pic/15/07/01/40V58PICaih_1024.jpg"
    },
    {
        id:"1",
        title:"生活用品中哪些让你拍案叫绝的巧妙设计？为什么要这样设计？",
        content:"这里是正文，正文，正文，你看",
        commentNum:93,
        zanNum:1450,
        img:"http://img1.imgtn.bdimg.com/it/u=1202973162,4047582720&fm=27&gp=0.jpg"
    },
    {
        id:"2",
        title:"那个瞬间你对中国娱乐圈彻底失望",
        content:"这里是正文，正文，正文，你看",
        commentNum:6004,
        zanNum:5620,
        img:"http://pic2.ooopic.com/10/22/23/71b1OOOPICda.jpg"
    },
    {
        id:"3",
        title:"如何看待惊天和张继科疑似恋情",
        content:"这里是正文，正文，正文，你看",
        commentNum:666,
        zanNum:590,
        img:"http://img1.imgtn.bdimg.com/it/u=1783848885,1970431296&fm=27&gp=0.jpg"
    },
    {
        id:"4",
        title:"就死额无人了设计费？？额UR接我IE就！！！",
        content:"这里是正文，正文，正文，你看",
        commentNum:9898,
        zanNum:345,
        img:"http://pic.58pic.com/58pic/15/06/90/19T58PICzS7_1024.jpg"
    },{
        id:"0",
        title:"甄嬛传中有哪些细思极恐的细节？",
        content:"这里是正文，正文，正文，你看",
        commentNum:130,
        zanNum:200,
        img:"http://pic.58pic.com/58pic/15/07/01/40V58PICaih_1024.jpg"
    },
    {
        id:"1",
        title:"生活用品中哪些让你拍案叫绝的巧妙设计？为什么要这样设计？",
        content:"这里是正文，正文，正文，你看",
        commentNum:93,
        zanNum:1450,
        img:"http://img1.imgtn.bdimg.com/it/u=1202973162,4047582720&fm=27&gp=0.jpg"
    },
    {
        id:"2",
        title:"那个瞬间你对中国娱乐圈彻底失望",
        content:"这里是正文，正文，正文，你看",
        commentNum:6004,
        zanNum:5620,
        img:"http://pic2.ooopic.com/10/22/23/71b1OOOPICda.jpg"
    },
    {
        id:"3",
        title:"如何看待惊天和张继科疑似恋情",
        content:"这里是正文，正文，正文，你看",
        commentNum:666,
        zanNum:590,
        img:"http://img1.imgtn.bdimg.com/it/u=1783848885,1970431296&fm=27&gp=0.jpg"
    },
    {
        id:"4",
        title:"就死额无人了设计费？？额UR接我IE就！！！",
        content:"这里是正文，正文，正文，你看",
        commentNum:9898,
        zanNum:345,
        img:"http://pic.58pic.com/58pic/15/06/90/19T58PICzS7_1024.jpg"
    }
];


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state={
            refreshing:true,
            dataList:new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}), //数据源(ListView.DataSource)
            scrollHeight:document.documentElement.clientHeight, //ListView的实际高度
        };

        this._renderItem = this._renderItem.bind(this);
        this._gotoTopicDetail = this._gotoTopicDetail.bind(this);

    }

    componentDidMount() {

        let finalHeight = this.state.scrollHeight;
        console.log("初始屏高 == ",finalHeight);
        if(document.getElementById('topHeight')){ //如果有顶部导航，则减去导航高度
            finalHeight -= document.getElementById('topHeight').offsetHeight;
            console.log("减去导航高度 == ",finalHeight);
        }
        if(document.getElementById('bottomHeight')){ //如果有底部tabbar，则减去底部tabbar高度
            finalHeight -= document.getElementById('bottomHeight').offsetHeight;
            console.log("减去tabbar高度 == ",finalHeight);
        }

        console.log("最终 == ",finalHeight);
        this.setState({
            scrollHeight:finalHeight,
        });

        setTimeout(() => {
            this.setState({
                dataList: this.state.dataList.cloneWithRows(dataSource),
                refreshing:false
            });
        }, 600);

    }


    /***
     * 绘制行
     * @param rowData 每一行的数据
     * @param sectionID  组ID
     * @param rowID  行ID
     * @returns {XML}
     * @private
     */
    _renderItem(rowData, sectionID, rowID){
        return(
            <Flex className="list-item" key={rowData.id} onClick={this._gotoTopicDetail}>
                <Flex.Item>
                    <Flex direction="column" justify="around" align="start">
                        <span style={{fontSize:"18px"}}>{rowData.title}</span>
                        <span style={{color:"#999"}}>{`${rowData.commentNum}条吐槽  ${rowData.zanNum}个赞`}</span>
                    </Flex>
                </Flex.Item>
                <img className="list-item-img" src={rowData.img}/>
            </Flex>
        )
    }


    /***
     * 跳转到话题详情页
     * @private
     */
    _gotoTopicDetail(){
        console.log("将要跳转到话题详情页");
    }



    render() {
        return (
            <div>
                <Header/>
                <WhiteSpace/>
                <MyListView url="aaaa"
                            method="GET"
                            pageSize={10}
                            dataSource={dataSource}
                            needToken={false}
                            renderRow={this._renderItem}
                            renderSeparator = {()=>{
                                return(
                                    <WhiteSpace className="list-item-separator"/>
                                )
                            }}/>



            </div>
        );
    }
}