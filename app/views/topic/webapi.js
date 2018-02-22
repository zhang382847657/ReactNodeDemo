/**
 * Created by zhanglin on 2018/2/13.
 */
import Request from '../../util/request';

/** 查询话题详情
 * @param id 话题ID */
exports.topicDetail = (id) => {
    let param = {
        id:id
    };
    return Request("/topic/detail",param,"GET",false);
}


/** 点赞
 * @param id 话题ID */
exports.topicLike = (id) => {
    let param = {
        id:id
    };
    return Request("/topic/like",param,"POST",true);
}


/** 用户对当前话题是否点过赞
 * @param id 话题ID */
exports.topicIsUserLike = (id) => {
    let param = {
        id:id
    };
    return Request("/topic/isUserLike",param,"POST",true);
}