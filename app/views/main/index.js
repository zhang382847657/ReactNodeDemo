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
                        tintColor="#7CCBFF"
                        barTintColor="white"
                >
                    <TabBar.Item
                        title="话题"
                        key="topic"
                        icon={<i className="fa fa-comment-o tab-bar-item-icon"/>}
                        selectedIcon={<i className="fa fa-commenting tab-bar-item-icon"/>}
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
                        icon={<i className="fa fa-user-circle-o tab-bar-item-icon"/>}
                        selectedIcon={<i className="fa fa-user-circle tab-bar-item-icon"/>}
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