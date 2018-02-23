/**
 * Created by zhanglin on 2018/2/6.
 */

import React, {Component} from 'react';
import {Flex, WhiteSpace,NavBar,Icon,Grid,Button} from 'antd-mobile';
import './index.less';
import Header from '../component/header';
import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();
import CommonInfo from '../../util/CommonInfo';
import webapi from './webapi';


const data = [
    {
        icon:"edit",
        text:"发布话题",
        url:"/posttheme"

    },
    {
        icon:"commenting-o",
        text:"我吐槽过的话题",
        url:"/participate"
    },
    {
        icon:"cog",
        text:"设置"
    },
]

export default class My extends Component {
    constructor(props) {
        super(props);

        this.state= {
            user: CommonInfo.getLoginInfo()
        };

        this._renderItem = this._renderItem.bind(this);
        this._loginClick = this._loginClick.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
        this._gridItemClick = this._gridItemClick.bind(this);
        this._getUserInfo = this._getUserInfo.bind(this);


    }

    componentDidMount() {

       this._getUserInfo();

    }

    /***
     * 查询用户信息
     * @private
     */
    _getUserInfo(){


        let that = this;

        if(CommonInfo.checkLogin()){

            webapi.userDetail(this.state.user.phone).then((response)=>{
                console.log("请求结果 == ",response);
                that.setState({
                    user:response
                })
            });

        }
    }

    /***
     * 登录/注册
     * @private
     */
    _loginClick(){
        history.push('/login');
    }


    /***
     * 绘制功能模块
     * @param dataItem
     * @returns {XML}
     */
    _renderItem(dataItem){
        return(
            <div className="grid-item">
                <i className={"fa fa-"+dataItem.icon} />
                <div className="sub-title">
                    {dataItem.text}
                </div>
            </div>
        )
    }

    /***
     * Grid点击事件
     * @param elem 元素
     * @param index 下标
     * @private
     */

    _gridItemClick(elem, index){
        history.push(data[index].url);
    }


    /***
     * 绘制头部视图
     * @returns {XML}
     * @private
     */
    _renderHeader(){


        if(CommonInfo.checkLogin()){

            return(
                <div className="rn-my-header">
                    <img src="http://5b0988e595225.cdn.sohucs.com/images/20180210/3aaa81b9226e4788b240225d4684ad0c.jpeg"/>
                    <Flex direction="column" align="start">
                        <span className="phone">{this.state.user.phone}</span>
                        <span className="abstract">{this.state.user.abstract}</span>
                    </Flex>
                </div>
            )
        }else {
            return (
                <div className="rn-my-header login">
                    <Button className="login-button" onClick={this._loginClick}>登录/注册</Button>
                </div>
            )
        }


    }

    render() {
        return (
            <div>
                <Header navBarText="我的" navBarLeftIcon=""/>

                <div className="rn-my-div">

                    {this._renderHeader()}

                    <WhiteSpace/>

                    <Grid data={data}
                          columnNum={4}
                          renderItem={this._renderItem}
                          onClick={this._gridItemClick}
                    />

                </div>

            </div>
        );
    }
}