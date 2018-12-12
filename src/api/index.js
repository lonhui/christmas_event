
import request from "./request"
  
export function getList(data) {
    return request({
        url:'/cms/getVerityCode',
        method:'get',
        data
    })
}