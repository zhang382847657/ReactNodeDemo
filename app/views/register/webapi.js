/**
 * Created by zhouxin on 2018/2/22.
 */

import Request from "../../util/request";

/**
 * 注册*/
exports.register = (phone, password) => {
    let param = {
        phone: phone,
        password: password,

    };
    return Request("/register", param, "GET", false);
}


