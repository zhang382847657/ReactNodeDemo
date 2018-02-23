/**
 * Created by zhouxin on 2018/2/23.
 */

/**
 * Created by zhanglin on 2018/2/22.
 */
import Request from '../../../util/request';


/**
 * 搜索结果集*/
exports.searchResult = ( topic) => {
    let param = {
        topic:topic,
    };
    return Request("/searchResult",param,"POST",true);
}