//import
const Mock = require("mockjs")
// 获取 mock.Random对象
const Random = Mock.Random
// mock一组数据
const openGift = function () {
    let data = {}
    let count = Random.integer(1,10)
    if(count>8){
        data = {
            code:0,
            msg:'success',
            data:{
                cellphone:''
            }
        }
    }else{
        data = {
            code:0,
            msg:'success',
            data:{
                item:Random.integer(100,10000),
                isSpecial:Random.integer(0,1),
            }
        }
    }
    return {
        data:data
    }
}

const setInfo = function () {    
    return {
        data: {
            code:0,
            msg:'success',
        }
    }
}

// Mock.mock(url,post/get,返回数据)
Mock.mock('/open/gift','get',openGift())
Mock.mock('/set/Info','post',setInfo())