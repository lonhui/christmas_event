<template>
    <div id="game">
        <div class="img">
            <img src="static/images/game/capingRun_min.png" alt="">
        </div>
        <div id="checkerboard">
            <!-- 背景棋盘 -->
            <img src="static/images/game/checkerboard_gray.png" alt="" v-show="checkerboard=='checkerboard_gray'">
            <img src="static/images/game/checkerboard_bright_1.png" alt="" v-show="checkerboard=='checkerboard_bright_1'">
            <img src="static/images/game/checkerboard_bright_2.png" alt="" v-show="checkerboard=='checkerboard_bright_2'">
            <img src="static/images/game/checkerboard_bright.png" alt="" v-show="checkerboard=='checkerboard_bright'">
            <div id="piece">
                <img src="static/images/game/piece.png" alt="">
            </div>
            <div class="flag">
                <img src="static/images/game/flag.png" alt="">
            </div>
            <div class="giftBox1" @click="openGiftBox(1)"></div>
            <div class="giftBox2" @click="openGiftBox(2)"></div>
            <div class="giftBox3" @click="openGiftBox(3)"></div>
        </div>
        <p>Lempar dadumu dan selesaikan permainan untuk kesempatan dapetin <span>Grand Prize!</span></p>

        <div class="batton_play">
            <div class="play" v-if="diceStatus">
                <img src="static/images/game/paly_button.png" @click="openDice" alt="">
            </div>
            <div class="play_dice" v-if="!diceStatus">
                <div class="dice_button" >
                    <img src="static/images/game/dice_button.png" alt="">
                </div>
                <p class="dice_button_text">{{countdown}}</p>
            </div>
            <div class="play" v-if="!diceStatus">
                <img src="static/images/game/BulletBox/200coins_button.png" @click="pay(0)">
            </div>
        </div>
        

        <NetworkError v-if="NetworkErrorShow" @on-close="NetworkErrorShow=false"></NetworkError>
        
        <NoCoins v-if="NoCoinsShow" @on-close="NoCoinsShow=false"></NoCoins>
        <GiftCall v-if="GiftCallShow" @on-close="GiftCallShow=false"></GiftCall>
        <GiftPhone v-if="GiftPhoneShow" @on-close="GiftPhoneShow=false"></GiftPhone>
        <NoLogin v-if="NoLoginShow" @on-close="NoLoginShow=false"></NoLogin>
        <Share v-if="ShareShow" @on-close="ShareShow=false"></Share>

        <Dice v-if="DiceShow" @on-close="closeDice" :diceCount="diceCount"></Dice>
        <UseCoins v-if="UseCoinsShow" @on-close="closePay" :payType="payType"></UseCoins>
        <WinningNo v-if="WinningNoShow" @on-close="WinningNoShow=false"></WinningNo>
        <Winning v-if="WinningShow" @on-close="closeWinning" :boxStatus="boxStatus" :countdown="countdown"></Winning>
        <SelectGift v-if="SelectGiftShow" @on-close="closeSelectGift" :boxType="boxType"></SelectGift>
        <GiftCoins v-if="GiftCoinsShow" @on-close="closeGiftCoins" :boxType="boxType"></GiftCoins>

    </div>
</template>

<script>
import NetworkError from "@/components/NetworkError"
import UseCoins from "@/components/UserCoins"
import NoCoins from "@/components/NoCoins"
import GiftCall from "@/components/GiftCall"
import GiftPhone from "@/components/GiftPhone"
import NoLogin from "@/components/NoLogin"
import SelectGift from "@/components/SelectGift"
import GiftCoins from "@/components/GiftCoins"
import Winning from "@/components/Winning"
import WinningNo from "@/components/Winning_no"
import Dice from "@/components/Dice"
import Share from "@/components/Share"

import axios from 'axios'

export default {
    data(){
        return{
            userId:undefined,
            NetworkErrorShow:false,//网络错误提示框
            UseCoinsShow:false,//使用金币提示框
            NoCoinsShow:false,//金币不足提示框
            GiftCallShow:false,//开奖结果显示————话费
            GiftPhoneShow:true,//开奖结果显示————手机
            NoLoginShow:false,//未登录提示框
            SelectGiftShow:false,//礼盒选择框
            GiftCoinsShow:false,//开奖结果显示————金币
            WinningShow:false,//盒子开启状态
            WinningNoShow:false,
            ShareShow:false,//分享弹框
            DiceShow:false,//投掷骰子

            timer:undefined,
            checkerboard:"checkerboard_gray",//棋盘class,用于更换棋盘背景
            toTheTop:false,//到顶，false正常走  ture方向走
            latticeWH:60,
            diceCount:undefined,//投骰点数
            // 棋盘上格子对应的坐标
            ChessPosition:[
                {top:480,left:0},{top:480,left:120},{top:480,left:240},{top:480,left:360},{top:480,left:480},
                {top:360,left:480},{top:360,left:360},{top:360,left:240},{top:360,left:120},{top:360,left:0},
                {top:240,left:0},{top:240,left:120},{top:240,left:240},{top:240,left:360},{top:240,left:480},
                {top:120,left:480},{top:120,left:360},{top:120,left:240},{top:120,left:120},{top:120,left:0},
                {top:0,left:0},{top:0,left:120},{top:0,left:240},{top:0,left:360},{top:0,left:480},
            ],
            ChessPositionNum:1,//当前所在格子
            boxPayNum:200,//开启本次礼盒需要的金币
            countdown:"00:00:00",//倒计时
// _______________________________________________________
            buyPackage:[
                {level: 1, count: 0},
                {level: 2, count: 0},
                {level: 3, count: 0},
            ],
            dailyPackage:0,//免费开箱次数
            diceStatus:false,
            payType:undefined,//付款类型 0 投掷，1 box_1，2 box_3，3 box_3
            boxType:undefined,//盒子类型        1 box_1，2 box_3，3 box_3
            boxStatus:undefined,//盒子的状态,打开盒子时传入模态框，用于模态框中判断显示状态
        }
    },
    components:{
        NetworkError,
        UseCoins,
        NoCoins,
        GiftCall,
        GiftPhone,
        NoLogin,
        SelectGift,
        GiftCoins,
        Winning,
        WinningNo,
        Dice,
        Share
    },
    mounted(){ 
        this.getCookie()
        this.getLatticeWH()
        this.getUserStatus()
        this.time()
    },
    methods:{
        getUserStatus(){
            // 获取用户当前位置
            axios.get("/dice/chance?uid="+this.userId)
            .then(res=>{
                console.log(res)
                let data = res.data.data
                if(res.data.code==0){
                    this.diceStatus = true
                }else{
                    this.diceStatus = false
                }
                // this.dailyPackage = data.dailyPackage
                this.dailyPackage = 0
                this.buyPackage = data.buyPackage
                this.transfer(data.position)//同步棋子位置
            }).catch(error=>{
                console.log(error)
                this.NetworkErrorShow = true
            })
        },
        // 投掷骰子
        openDice(){
            axios.get('/dice/one?uid='+this.userId)
            .then(res=>{
                console.log(res)
                if(res.data.code==0){
                    this.diceCount = res.data.data.diceCount
                    this.diceStatus = false
                    this.DiceShow = true
                }
            }).catch(error=>{
                console.log(error)
                this.NetworkErrorShow = true
            })
        },
        // 付款
        pay(payType){
            this.payType = payType
            this.UseCoinsShow = true
        },
        closePay(whether){//确付款
            if(whether){
                this.UseCoinsShow = false
                switch(this.payType){
                    case 0: this.payOpenDice();break;
                    case 1: this.SelectGiftShow = true;break;
                    case 2: this.SelectGiftShow = true;break;
                    case 3: this.SelectGiftShow = true;break;
                }
            }else{
                this.UseCoinsShow = false
            }
        },
        // 付费投掷骰子
        payOpenDice(){
             axios.get('/dice/buy/dice/chance?uid='+this.userId)
            .then(res=>{
                console.log(res)
                if(res.data.code==0){
                    this.openDice()
                }
            }).catch(error=>{
                console.log(error)
                this.NetworkErrorShow = true
            })
        },
        closeDice(diceCount){
            this.DiceShow = false
            var endPoint = this.ChessPositionNum + diceCount//本次行走的终点
            console.log("本次行走初始位置："+this.ChessPositionNum+";本次行走终点位置："+endPoint)
            this.walk(diceCount,endPoint)
        },
//=======================================================开箱
        openGiftBox(boxType){
            this.boxType = boxType
            this.boxStatus={
                count:this.buyPackage[0].count,
                dailyPackage:this.dailyPackage,
                boxType:boxType
            }
            switch(boxType){
                case 1: 
                        if(this.ChessPositionNum > 7){
                            this.WinningShow = true
                        }else{
                            this.WinningNoShow = true
                        }
                        break;
                case 2: 
                        if(this.ChessPositionNum > 16){
                            this.WinningShow = true
                        }else{
                            this.WinningNoShow = true
                        }
                        break;
                case 3: 
                        if(this.ChessPositionNum == 25){
                            this.WinningShow = true
                        }else{
                            this.WinningNoShow = true
                        }
                        break;
            }
        },
        closeWinning(num,boxType){//0关闭，1开箱，2付款开箱
             switch(num){
                    case 0: this.WinningShow = false;break;
                    case 1: 
                            this.WinningShow = false
                            this.SelectGiftShow = true
                            break;
                    case 2: 
                            this.WinningShow = false
                            this.pay(boxType)
                            break;
                }
        },
        closeSelectGift(GiftNum){
            this.SelectGiftShow = false
            switch(GiftNum){
                case 1: this.GiftCoinsShow = true
                        break
                case 2: this.GiftCallShow = true
                        break
                case 3: this.GiftPhoneShow = true
                        break
            }
        },
        closeGiftCoins(whether){
            this.GiftCoinsShow = false
            if(whether){
                this.pay(this.boxType)
            }
        },

//=======================================================动画
        // 倒计时
        time(){
            // 当天00:00:00时间戳
            let endTime = new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000
            setInterval(()=>{
                let timestamp = Date.parse(new Date());// 当前时间戳
                let timeDifference = (endTime-timestamp)/1000
                if(timeDifference==0){
                    this.getUserStatus()
                }
                let h = Math.floor(timeDifference / 60 / 60 % 24)//获得小时
                let m = Math.floor(timeDifference / 60 % 60)//获得分钟
                let s = Math.floor(timeDifference % 60)//获得秒钟
                //将天数转换为小时显示（需求绝定）
                //格式化时分秒
                if(h < 10){ h = '0' + h }
                if(m < 10){ m = '0' + m }
                if(s < 10){ s = '0' + s }
                this.countdown = h + ':' + m + ':' + s    //倒计时格式  时：分：秒
            },1000)
        },
        // 获取棋盘上每个格子的大小
        getLatticeWH(){
            var Odiv =  document.getElementById("checkerboard")
            var lattice_width = window.getComputedStyle(Odiv).width
            var lattice_height = window.getComputedStyle(Odiv).height
            var latticeWH = lattice_width+""
            this.latticeWH = (Number(latticeWH.substring(0,latticeWH.length-2))/5).toFixed(0)
            this.getChessPosition(this.latticeWH)
        },
        // 获取棋盘中每个格子的坐标
        getChessPosition(latticeWH){
            let aa = latticeWH*2
            let bb = latticeWH*4
            let cc = latticeWH*6
            let dd = latticeWH*8
            var ChessPosition = [
                {top:dd,left:0},{top:dd,left:aa},{top:dd,left:bb},{top:dd,left:cc},{top:dd,left:dd},
                {top:cc,left:dd},{top:cc,left:cc},{top:cc,left:bb},{top:cc,left:aa},{top:cc,left:0},
                {top:bb,left:0},{top:bb,left:aa},{top:bb,left:bb},{top:bb,left:cc},{top:bb,left:dd},
                {top:aa,left:dd},{top:aa,left:cc},{top:aa,left:bb},{top:aa,left:aa},{top:aa,left:0},
                {top:0,left:0},{top:0,left:aa},{top:0,left:bb},{top:0,left:cc},{top:0,left:dd},
            ]
            this.ChessPosition = ChessPosition
            console.log(ChessPosition)
        },
        //判断转换礼盒状态
        conversionBackImg(){
            if(this.ChessPositionNum < 8){
                this.checkerboard = "checkerboard_gray"
                this.giftBoxStatus={
                    giftBox_1:false,
                    giftBox_2:false,
                    giftBox_3:false
                }
            }else if(this.ChessPositionNum >= 8 && this.ChessPositionNum < 17){
                this.checkerboard = "checkerboard_bright_1"
                this.giftBoxStatus={
                    giftBox_1:true,
                    giftBox_2:false,
                    giftBox_3:false
                }
            }else if(this.ChessPositionNum >= 17 && this.ChessPositionNum < 25){
                this.checkerboard = "checkerboard_bright_2"
                this.giftBoxStatus={
                    giftBox_1:true,
                    giftBox_2:true,
                    giftBox_3:false
                }
            }else if(this.ChessPositionNum == 25){
                this.checkerboard = "checkerboard_bright"
                this.giftBoxStatus={
                    giftBox_1:true,
                    giftBox_2:true,
                    giftBox_3:true
                }
            }
            this.judgeGrid()
        },
        // 按骰子点数行走
        walk(num,endPoint){
            var timing = null
            // 每一点1.2秒走一步
            var count=0
            var OneGrid = this.latticeWH
            timing = setInterval(()=>{
                if(this.ChessPositionNum==endPoint || this.ChessPositionNum==25){
                    if(this.ChessPositionNum==endPoint){
                        console.log("本次行走结束！")
                        clearInterval(timing)
                        this.conversionBackImg()
                    }else if(endPoint>25){
                        endPoint = 25-(endPoint - 25)
                        if(endPoint<this.ChessPositionNum){
                            OneGrid = -OneGrid
                        }
                        console.log("触顶倒退，目标修改为:"+endPoint+"当前位置："+this.ChessPositionNum)
                    }else{
                        this.walkingToRight(OneGrid);
                        --this.ChessPositionNum
                    }
                }else{
                    console.log("走了"+ ++count+"步")
                    switch(this.ChessPositionNum){
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 21:
                        case 22:
                        case 23:
                        case 24:this.walkingToRight(OneGrid);//向右
                                endPoint<this.ChessPositionNum?--this.ChessPositionNum:++this.ChessPositionNum
                                console.log("当前位置："+this.ChessPositionNum+";目标位置："+endPoint)
                                break;
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 16:
                        case 17:
                        case 18:
                        case 19:this.walkingToRight(-OneGrid);// 向左
                                endPoint<this.ChessPositionNum?--this.ChessPositionNum:++this.ChessPositionNum
                                console.log("当前位置："+this.ChessPositionNum+";目标位置："+endPoint)
                                break;
                        case 5:
                        case 10:
                        case 15:
                        case 20:this.walkingToTop(OneGrid);//向上
                                endPoint<this.ChessPositionNum?--this.ChessPositionNum:++this.ChessPositionNum
                                console.log("当前位置："+this.ChessPositionNum+";目标位置："+endPoint)
                                break;
                    }
                }
            },1000)
        },
        // 当行进停止时判断当前所在格子的功能
        judgeGrid (){
            switch(this.ChessPositionNum){
                case 4:
                        this.transfer(8)
                        break;
                case 13:
                        this.transfer(10)
                        break;
                case 18:
                        this.transfer(22)
                        break;
                case 24:
                        this.transfer(15)
                        break;
            }
        },
        //传送
        transfer(num){
            console.log("传送！")
            this.ChessPositionNum = num
            console.log("当前位置："+this.ChessPositionNum)
            var oDiv =document.getElementById("piece");
            let left = this.ChessPosition[num-1].left/2
            let top = this.ChessPosition[num-1].top/2
            oDiv.style.left = left + "px"
            oDiv.style.top = top + "px"
            this.conversionBackImg()
        },
        //向右行走
        walkingToRight(target){
            var oDiv =document.getElementById("piece");
            var count=0
            clearInterval(this.timer);
            this.timer = setInterval(function(){
                var speed = (target - count)/10;
                speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
                if(count == target){
                    clearInterval(this.timer);
                }
                else{
                    oDiv.style.left = oDiv.offsetLeft + speed + 'px';
                    count = count + speed
                }
            },30);
        },
        //向上行走
        walkingToTop(target){
            var oDiv =document.getElementById("piece");
            var count = 0
            clearInterval(this.timer);
            this.timer = setInterval(function(){
                var speed = (target - count)/10;
                speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
                if(count == target){
                    clearInterval(this.timer);
                }
                else{
                    oDiv.style.top = oDiv.offsetTop - speed + 'px';
                    count = count + speed
                }
            },30);
        },
        //读取cookie
         getCookie() {
            if (document.cookie.length>0) {
                var arr=document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
                for(var i=0;i<arr.length;i++){
                    var arr2=arr[i].split('=');//再次切割
                    //判断查找相对应的值
                    if(arr2[0]=='uid'){
                        this.userId = arr2[1]//保存到保存数据的地方
                    }
                }
                // if(this.userId==null){this.NoLoginShow = true}
            }
        },
    }
}
</script>

<style scoped>
button{
    width: 200px;
    height: 200px;
}
#game{width: 100%;}

.img{
    width: 300px;
    margin: 0 auto;
}
img{
    width: 100%;
}
#checkerboard{
    width: 600px;
    height: 600px;
    margin: 0 auto;
    position: relative;
}
.giftBox1{
    width: 120px;
    height: 120px;
    /* background-color: rgba(137, 43, 226, 0.171); */
    position: absolute;
    top: 350px;
    left: 240px;
}
.giftBox2{
    width: 120px;
    height: 120px;
    /* background-color: rgba(137, 43, 226, 0.171); */
    position: absolute;
    top: 115px;
    left: 360px;
}
.giftBox3{
    width: 120px;
    height: 120px;
    /* background-color: rgba(137, 43, 226, 0.171); */
    position: absolute;
    top:0;
    left: 480px;
}
#piece{
    width: 120px;
    height: 120px;
    position:absolute;
    top: 480px;
    left: 0px;
}
.flag{
    width: 80px;
    height: 80px;
    position:absolute;
    top: -80px;
    left: 440px; 
}
p{
    width: 80%;
    color: #fff;
    font-size: 28px;
    line-height: 40px;
    margin: 20px auto 0;
    text-align: center;    
}
.batton_play{
    padding-top: 50px;
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:flex-start;
    align-content:flex-start;
}
.play{
    width: 300px;
}
.play_dice{
    width: 300px;
    height: 110px;
    border-radius: 100px;
    background-color: #c2c2c2;
    position: relative;
}
.dice_button{
    width: 80px;
    position: absolute;
    top: 14px;
    left: 16px;
}
.dice_button_text{
    font-weight: bold;
    color: #818181;
    position: absolute;
    top: 15px;
    left: 60px;
}
span{
    color: #50ac7e;
    font-weight: bold;
}
</style>
