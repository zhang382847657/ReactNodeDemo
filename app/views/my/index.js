/**
 * Created by zhanglin on 2018/2/6.
 */

import React, {Component} from 'react';
import {Flex, WhiteSpace,NavBar,Icon,Grid,Button} from 'antd-mobile';
import './index.less';
import Header from '../component/header';
import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();


const data = [
    {
        icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
        text:"发布话题",
        url:"/posttheme"
    },
    {
        icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
        text:"我参与过的话题",
        url:"/Participate"
    },
    {
        icon:"https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
        text:"设置"
    },
]

export default class My extends Component {
    constructor(props) {
        super(props);

        this.state={

        };

        this.click = this.click.bind(this)


    }

    componentDidMount() {



    }

    click(e,i){
        history.push(e.url);

    }

    render() {
        return (
            <div>
                <Header navBarText="我的" navBarLeftIcon=""/>

                <div className="rn-my-header">
                    <Button className="login-button">登录/注册</Button>
                </div>
                <WhiteSpace/>

                <Grid data={data} activeStyle={false} onClick={this.click}/>

            </div>
        );
    }
}