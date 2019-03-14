import request from '@/utils/request'

//获取短信验证码
export function getMockDemo(phone) {
    return request({
        url: `/data`,
        method: 'post',
        data: {
            phone
        },
        headers: {
            'Auth-Token': ''
        }
    })
}
