/**
 * Created by zhouxin on 2018/2/22.
 */

import Request from "../../util/request";

/**
 * 注册*/
exports.posttheme= (title, content) => {
    let param = {
        title: title,
        content: content,

    };
    return Request("/posttheme", param, "GET", false);
}