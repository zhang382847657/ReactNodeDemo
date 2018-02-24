/**
 * Created by zhanglin on 2018/2/24.
 */

import { Toast } from 'antd-mobile';
import Constant from './Constant';
import CommonInfo from './CommonInfo';

/**
 * 上传文件
 * @param url
 * @param file  文件对象
 * @param success 上传成功的回调
 * @param deleteFile 文件删除的回调
 * @param fail 上传失败的回调
 * @param progress 上传进度的回调
 * @return {Promise}
 * @constructor
 */
export default function FileUpload(url, file , success, deleteFile, fail, progress) { //未传没有，有 true， false

    let finalUrl = Constant.InterfaceUrl + url; //拼接完整的路径


    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        if (xhr.upload) {

            xhr.upload.addEventListener("progress", (e) => {
                // 处理上传进度
                progress && progress(file, e.loaded, e.total);
            }, false);

            // 文件上传成功或是失败
            xhr.onreadystatechange = (e) => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // 上传成功操作
                        success && success(file, xhr.responseText);
                        // 把该文件从上传队列中删除
                        deleteFile && deleteFile(file);
                        resolve(xhr.responseText);
                    } else {
                        // 上传出错处理
                        fail && fail(file, xhr.responseText);
                        reject(xhr.responseText);
                    }
                }
            };

            // 开始上传
            xhr.open("POST", finalUrl, true);
            xhr.setRequestHeader('Authorization', CommonInfo.getToken());
            let form = new FormData();
            form.append("filedata", file);
            xhr.send(form)
        }
    })

}