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