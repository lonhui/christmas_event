
import request from "./request"

// 获取用户当前位置，骰子状态，开箱状态，参数uid
export function getUserInfo(data) {
    return request({
        url:'/dice/chance',
        method:'get',
        data
    })
}

// 免费投掷骰子，参数uid
export function throwingDice(data) {
    return request({
        url:'/dice/one',
        method:'get',
        data
    })
}

// 付费投掷骰子，参数uid
export function playThrowingDice(data) {
    return request({
        url:'/dice/buy/dice/chance',
        method:'get',
        data
    })
}

// 开箱，参数uid
export function Unpacking(data) {
    return request({
        url:'/dice/buy/package/chance',
        method:'get',
        data
    })
}
