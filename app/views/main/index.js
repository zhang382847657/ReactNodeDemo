/**
 * Created by zhanglin on 2018/2/5.
 */

import React, {Component} from 'react';
import { TabBar } from 'antd-mobile';
import My from '../my';
import Home from '../home';
import './index.less';


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'topic',
        };

    }


    render() {
        return (
            <div className='rn-main'>

                <TabBar id="bottomHeight"
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                >
                    <TabBar.Item
                        title="话题"
                        key="topic"
                        icon={<div className="rn-tab-item-icon" style={{background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}/>}
                        selectedIcon={<div className="rn-tab-item-icon" style={{background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}/>}
                        selected={this.state.selectedTab === 'topic'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'topic',
                            });
                        }}
                        data-seed="logId"
                    >
                       <Home/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div className="rn-tab-item-icon" style={{background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}/>}
                        selectedIcon={<div style={{background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}/>}
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'my'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'my',
                            });
                        }}
                    >
                       <My/>
                    </TabBar.Item>
                </TabBar>


            </div>
        );
    }
}