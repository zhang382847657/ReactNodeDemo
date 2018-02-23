/**
 * Created by zhanglin on 2018/2/11.
 */

import { Toast } from 'antd-mobile';
import Constant from './Constant';
import CommonInfo from './CommonInfo';


export default function Request(url, data, method,needToken) { //未传没有，有 true， false

    let finalUrl = Constant.InterfaceUrl + url; //拼接完整的路径

    let urlData = "";
    if(data){
        if(!(typeof data == 'string')){
            let tmp = "";
            for(let k in data){
                if(data.hasOwnProperty(k)){
                    tmp =  k + "=" + data[k] + "&" + tmp;
                }
            }
            urlData = tmp;
        }
    }

    //去除结尾的&
    urlData = urlData.replace(/^([^&]+)&$/,"$1");


    if (!method) {
        method = 'POST'
    }

    if(data == null){
        data = {}
    }


    let init = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8',
        },
        body:JSON.stringify(data)
    };


    if(needToken){
        init = {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization:CommonInfo.getToken()
            },
            body:JSON.stringify(data)
        }
    }


    if(method != 'POST'){
        delete  init.body;
        finalUrl= finalUrl +"?"+urlData;
    }

    return new Promise((resolve,reject)=>
    {
        fetch(finalUrl, init
        ).then(response => {
            return response.json().then(json => ({json, response}))
        }).then(({json, response}) => {
            if (!response.ok) {
                return Promise.reject(json)
            }
            return json
        }).then(
            response => {
                if (response.result == "ok") {
                    resolve(response.data);
                } else {
                    if (response.rescode == 202) {//202未登录
                        Toast.fail("未登录",1)
                    } else if (response.rescode == 203){ //登录过期
                        Toast.fail("请重新登录",1)
                    } else {
                        Toast.fail(response.msg);
                        reject(response);
                    }

                }
            },
            error => {
                console.log('接口异常 == ', error)
                Toast.fail(error.message, 1);
                reject(error);
            }
        );
    })
}