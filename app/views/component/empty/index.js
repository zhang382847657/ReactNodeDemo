/**
 * Created by zhanglin on 2018/2/23.
 */

import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {Flex,Button} from 'antd-mobile';

import './index.less';

export default class Empty extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
           <Flex className="empty" direction="column" justify="around">
               <i className="iconfont">&#xe9aa;</i>
               <span>{this.props.title}</span>
               {this.props.showReload ?
                   <Button type="ghost"
                           inline size="small"
                           onClick={()=>{this.props.reloadClick&&this.props.reloadClick()}}>
                       重新加载
                   </Button> : null}

           </Flex>
        )
    }
}

Empty.propTypes = {
    title:PropTypes.string, //提示词
    showReload:PropTypes.bool, //是否显示重新加载按钮
    reloadClick:PropTypes.function, //重新加载的回调
};


Empty.defaultProps = {
    title:"暂无数据",
    showReload:false,
};