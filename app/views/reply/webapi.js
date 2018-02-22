/**
 * Created by zhanglin on 2018/2/22.
 */
import Request from '../../util/request';

/** 发表评论
 * @param topicId 话题ID
 * @param content 吐槽内容 */
exports.sendComment = (topicId, content) => {
    let param = {
        topicId:topicId,
        content:content
    };
    return Request("/topic/sendComment",param,"POST",true);
}