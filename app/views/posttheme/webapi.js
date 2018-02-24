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
exports.posttheme= (title, content, images) => {
    let param = {
        title: title,
        content: content,
        images:images
    };
    return Request("/postTheme", param, "POST", true);
}