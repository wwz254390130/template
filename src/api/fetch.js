import axios from 'axios';
import { Notify } from 'vant';
import Vue from 'vue';
export function fetch(options) {
    let that = new Vue;
    let data = {};
	if(options.contentType == 'application/json'){
		data = options.params;
	}else{
		data = new FormData();
		Object.keys(options.params).forEach(item =>{
		    if (Array.isArray(options.params[item])) {
		        options.params[item].forEach(_item => {
                    data.append(item+"[]", _item);
                });
            }else{
                data.append(item,options.params[item]);
            }
		});
	}
	return new Promise((resolve, reject) => {
        console.log(options.url)
        console.log(data)
        axios({
            method: options.method || 'post',
            url: options.url,
            data:data,
            headers: {
                'SUYUNTOKEN': localStorage.getItem("SUYUNTOKEN") || '',
                'SUYUNSESSION':localStorage.getItem("SUYUNSESSION") || '',
                'Content-type':options.contentType || 'application/x-www-form-urlencoded'//'multipart/form-data'
            },
            timeout: 10 * 1000
        }).then(res => {
            if(typeof res.data == 'string'){
                try{
                    if (typeof JSON.parse(res.data) == "object") {
                        resolve(res.data);
                    }
                } catch(e) {
                    localStorage.removeItem("SUYUNSESSION");
                    localStorage.removeItem("SUYUNTOKEN");
                    localStorage.removeItem("userName");
                    localStorage.removeItem("userInfo");
                    Notify((res.data.errorMsg || '登录失效，请重新登录'));
                    // location.reload();
                }
            }else if(res.data.errorCode == "998"){
                localStorage.setItem('SUYUNSESSION',res.data.data.SUYUNSESSION);
                localStorage.setItem('SUYUNTOKEN',res.data.data.SUYUNTOKEN);
                localStorage.setItem('userInfo',JSON.stringify(res.data.data.USER));
                // that.$router.push({
                //     name: 'index'
                // })
                var len = window.location.href.indexOf("?");
                if(len>0){
                    window.location.href=window.location.href.substring(0,len)+"?"+Math.random();
                }else{
                    window.location.href=window.location.href+"?"+Math.random();
                }
                location.reload();
            }
            else if(res.data.errorCode == "-999"){
                localStorage.removeItem("SUYUNSESSION");
                localStorage.removeItem("SUYUNTOKEN");
                localStorage.removeItem("userName");
                localStorage.removeItem("userInfo");
				Notify((res.data.errorMsg || '登录失效，请重新登录'));
                // location.reload();
			}else{
				resolve(res.data);
			}
        }).catch(error => {
            console.error('接口请求异常：' + error);
            reject(error);
        });
    });

}
