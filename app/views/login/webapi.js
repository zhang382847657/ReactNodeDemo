/**
 * Created by zhanglin on 2018/2/12.
 */
import Request from '../../util/request';

/** 查询家政公司信息
 * @param superShopCode 总店编号 */
exports.login = (phone,password) => {
    let param = {
        phone:phone,
        password:password
    };
    return Request("/login",param,"GET",false);
}