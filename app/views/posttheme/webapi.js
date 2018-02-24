/**
 * Created by zhouxin on 2018/2/22.
 */

import Request from "../../util/request";

/**
 * 发布话题
 * @param title
 * @param content
 * @param images
 */
exports.postTheme= (title, content, images) => {
    let param = {
        title: title,
        content: content,
        images:images
    };
    return Request("/topic/publish", param, "POST", true);
}