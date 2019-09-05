import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defillts.baseURL = ''
axios.defaults.withCredentials = true
//axios默认是发送请求的时候不会带上cookie的，需要通过设置withCredentials: true来解决

export default function request(url, type = 'GET', data = {}) {

    return new Promise((resolve, reject) => {
        let options = {
            url: url,
            method: type
        };
        if (type.toLowerCase() == 'get') {
            options.params = data
        } else {
            options.data = data
        }
        axios(options).then(res => {//返回的内容例如: {status： ok/fail, msg: '未登录'}  
            cosnole.log(res.data)
            if (res.data.status == 'ok') { //通过判断得到的响应属性状态 执行接下来的操作
                resolve(res.data)
            } else {
                Message.error(res.data.msg)
                reject(res.data)
            }
        }).catch(err => {
            Message.error('网络异常')
            reject({ msg: '网络异常' })
        })
    })
}