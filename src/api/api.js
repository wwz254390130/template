import { fetch } from "./fetch";
import api from './url';

class API{
    constructor(){}

    /** 登入 修改密码相关 **/

    // 登录
    static login(params) {
        return fetch({
            url:api.host+'a/authorization',
            method: 'post',
            params: {
                mobile: params.mobile,
                password: params.password
            }
        });
    }
    // 登出
    static logout() {
        return fetch({
            url:api.host+'onwaylogout',
            method: 'post',
            params: {}
        });
    }

}

export default API;
