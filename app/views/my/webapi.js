/**
 * Created by zhanglin on 2018/2/22.
 */
import Request from '../../util/request';

/** 查询用户信息
 * @param phone 手机号 */
exports.userDetail = (phone) => {
    let param = {
        phone:phone
    };
    return Request("/user/detail",param,"POST",true);
}