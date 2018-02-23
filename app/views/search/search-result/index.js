/**
 * Created by zhouxin on 2018/2/11.
 */


import React, {Component} from "react";
import {WhiteSpace} from "antd-mobile";
import Header from "../../component/header";
import MyListView from '../../component/listview';
import Empty from '../../component/empty';
import "./index.less";


export default class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: []
        };

        this._gotoTopicDetail = this._gotoTopicDetail.bind(this);
        this._renderItem = this._renderItem.bind(this);

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
    _gotoTopicDetail(id){
        this.props.history.push(`/topic/${id}`);
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

        let imageUrl = null;
        if(rowData.images){
            imageUrl = rowData.images.split(',')[0];
        }

        return(
            <Flex className="list-item" key={rowData.id} onClick={()=>{this._gotoTopicDetail(rowData.id)}}>
                <Flex.Item>
                    <Flex direction="column" justify="around" align="start">
                        <span style={{fontSize:"18px"}}>{rowData.title}</span>
                        <span style={{color:"#999"}}>{`${rowData.commentNum || 0}条吐槽  ${rowData.likeNum|| 0}个赞`}</span>
                    </Flex>
                </Flex.Item>
                {imageUrl?<img className="list-item-img" src={imageUrl}/>:null}
            </Flex>
        )
    }

    render() {
        return (
            <div >
                <Header navBarText="搜索结果" />

                <div className="rn-home-div">
                    <WhiteSpace/>
                    <MyListView url="/topic/search"
                                method="GET"
                                pageSize={10}
                                param={{search:this.props.location.state.search}}
                                needToken={false}
                                renderRow={this._renderItem}
                                renderSeparator = {()=>{
                                    return(
                                        <WhiteSpace className="list-item-separator"/>
                                    )
                                }}
                                emptyComponent = {()=>{
                                    return(
                                        <Empty/>
                                    )
                                }}/>
                </div>
            </div>


        )


    }

}