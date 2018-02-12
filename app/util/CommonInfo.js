/**
 * Created by zhanglin on 2018/2/11.
 */
import {Modal, Toast} from "antd-mobile";
import Constants from "./Constant";

let CommonInfo = function(){}


/**
 *检查是否登录
 * */
CommonInfo.checkLogin = function checkLogin() {
    let token = getToken();
    if(token && token != 'null' && token != "undefined"){
        return true;
    }else {
        return false;
    }
}



/**
 * 重新登录，专为底部tabbar切换时判断定制
 * 该方法去掉了时间的限制
 * */
CommonInfo.reLogin= function reLogin(){
    //存储当前的url
    localStorageWrap.setItem(Constants.LASTWEIXINHREF,window.location.href);
    window.location.href = "/#/login";
}

/**
 * 返回到登录之前的页面
 * */
function goToLastHref(){
    let lastWeixinHref = localStorageWrap.getItem(Constants.LASTWEIXINHREF) || '#/';
    window.location.href=lastWeixinHref;
    localStorageWrap.removeItem(Constants.LASTWEIXINHREF);
    lastWeixinHref == '#/' ?window.location.reload():'';
}

CommonInfo.saveLoginInfo = function(res,goLast){

    localStorageWrap.clear([Constants.LASTWEIXINHREF]);
    if(res.token){
        saveToken(res.token);
    }
    localStorageWrap.setItem(Constants.USERLOGININFO,JSON.stringify(res.user));
    if(goLast){
        //去最近的页面
        goToLastHref();
    }
};



CommonInfo.getLoginInfo = function getLoginInfo(){
    let tmp = {};
    try{
        tmp = JSON.parse(localStorageWrap.getItem(Constants.USERLOGININFO));
    }catch (e){
        tmp = {};
    }
    tmp = tmp || {};
    return tmp;
}


CommonInfo.saveToken = function saveToken(token) {
    localStorageWrap.setItem(Constants.TOKEN,token);
};

CommonInfo.getToken = function getToken() {
    return localStorageWrap.getItem(Constants.TOKEN);
}

CommonInfo.removeToken = function () {
    localStorageWrap.removeItem(Constants.TOKEN);
}




/**
 * 包装 localStorage
 * */
let localStorageWrap = {
    setItem:function(key,value){
        localStorage.setItem(appendDuserCode(key),value);
    },
    getItem:function(key){
        return localStorage.getItem(appendDuserCode(key));
    },
    removeItem:function(key){
        localStorage.removeItem(appendDuserCode(key));
    },
    clear: function (excludekey) {
        //只能清除当前用户下所有数据信息
        let userKeyPrefix = appendDuserCode("");
        console.log(userKeyPrefix);
        for(let i=localStorage.length - 1 ; i >=0; i--){
            let key = localStorage.key(i);

            //excludekey 下面的值不清除
            let flag = true;
            if(excludekey){
                for(let exJ= 0;exJ < excludekey.length;exJ++){
                    if(key == (userKeyPrefix + excludekey[exJ])){
                        flag = false;
                    }
                }

            }
            if(flag) {
                if (key.indexOf(userKeyPrefix) === 0) {
                    //移除
                    localStorage.removeItem(key);
                }
            }
        }
    }

};

CommonInfo.localStorage = localStorageWrap;


/**
 * 包装sessionStorage
 * */
let sessionStorageWrap = {
    setItem:function(key,value){
        sessionStorage.setItem(appendDuserCode(key),value);
    },
    getItem:function(key){
        return sessionStorage.getItem(appendDuserCode(key));
    },
    removeItem:function(key){
        sessionStorage.removeItem(appendDuserCode(key));
    }
};

CommonInfo.sessionStorage = sessionStorageWrap;


module.exports = CommonInfo;
