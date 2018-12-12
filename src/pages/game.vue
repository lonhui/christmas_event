<template>
    <div id="game">
        <div class="img">
            <img src="@/assets/images/game/capingRun_min.png" alt="">
        </div>
        <div id="checkerboard">
            <div id="piece">
                <img src="@/assets/images/game/piece.png" alt="">
            </div>
        </div>
        <p>Lempar dadumu dan selesaikan permainan untuk kesempatan dapetin <span>Grand Prize!</span></p>
        <div class="play">
            <img src="@/assets/images/game/paly_button.png" @click="openDice" alt="">
        </div>

        <button @click="walkingToTop(latticeWH)"> 上 </button>
        <button @click="walkingToBottom(latticeWH)"> 下 </button>
        <button @click="walkingToLeft(latticeWH)"> 左 </button>
        <button @click="walkingToRight(latticeWH)"> 右 </button>


        <NetworkError v-if="NetworkErrorShow" @on-close="NetworkErrorShow=false"></NetworkError>
        <UserCoins v-if="UserCoinsShow" @on-close="UserCoinsShow=false"></UserCoins>
        <NoCoins v-if="NoCoinsShow" @on-close="NoCoinsShow=false"></NoCoins>
        <GiftCall v-if="GiftCallShow" @on-close="GiftCallShow=false"></GiftCall>
        <NoLogin v-if="NoLoginShow" @on-close="NoLoginShow=false"></NoLogin>
        <SelectGift v-if="SelectGiftShow" @on-close="SelectGiftShow=false"></SelectGift>
        <GiftCoins v-if="GiftCoinsShow" @on-close="GiftCoinsShow=false"></GiftCoins>
        <Winning v-if="WinningShow" @on-close="WinningShow=false"></Winning>
        <Dice v-if="DiceShow" @on-close="closeDice"></Dice>
    </div>
</template>

<script>
import NetworkError from "@/components/NetworkError"
import UserCoins from "@/components/UserCoins"
import NoCoins from "@/components/NoCoins"
import GiftCall from "@/components/GiftCall"
import NoLogin from "@/components/NoLogin"
import SelectGift from "@/components/SelectGift"
import GiftCoins from "@/components/GiftCoins"
import Winning from "@/components/Winning"
import Dice from "@/components/Dice"


export default {
    data(){
        return{
            NetworkErrorShow:false,//网络错误提示框
            UserCoinsShow:false,//使用金币提示框
            NoCoinsShow:false,//金币不足提示框
            GiftCallShow:false,//开奖结果显示————话费
            NoLoginShow:false,//未登录提示框
            SelectGiftShow:false,//礼盒选择框
            GiftCoinsShow:false,//开奖结果显示————金币
            WinningShow:false,//中奖弹框
            DiceShow:false,//投掷骰子
            timer:null,
            latticeWH:60,
            // 棋盘上格子对应的坐标
            ChessPosition:[
                {top:480,left:0},{top:480,left:120},{top:480,left:240},{top:480,left:360},{top:480,left:480},
                {top:360,left:480},{top:360,left:360},{top:360,left:240},{top:360,left:120},{top:360,left:0},
                {top:240,left:0},{top:240,left:120},{top:240,left:240},{top:240,left:360},{top:240,left:480},
                {top:120,left:480},{top:120,left:360},{top:120,left:240},{top:120,left:120},{top:120,left:0},
                {top:0,left:0},{top:0,left:120},{top:0,left:240},{top:0,left:360},{top:0,left:480},
            ],
            ChessPositionNum:1,//当前所在格子

        }
    },
    components:{
        NetworkError,
        UserCoins,
        NoCoins,
        GiftCall,
        NoLogin,
        SelectGift,
        GiftCoins,
        Winning,
        Dice
    },
    mounted(){
       this.getLatticeWH()
    },
    methods:{
        openDice(){
            this.DiceShow = true
        },
        closeDice(num){
            this.DiceShow = false
            var endPoint = this.ChessPositionNum + num//本次行走的终点
            console.log("本次行走初始位置："+this.ChessPositionNum+";本次行走终点位置："+endPoint)
            this.walk(num,endPoint)
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
            let bb =latticeWH*4
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
        // 按骰子点数行走
        walk(num,endPoint){
            var timing = null
            // 每一点1.2秒走一步
            var count=0
            timing = setInterval(()=>{
                if(this.ChessPositionNum==endPoint){
                    clearInterval(timing)
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
                        case 24:this.walkingToRight(this.latticeWH);//向右
                                ++this.ChessPositionNum;
                                console.log("当前位置："+this.ChessPositionNum+";目标位置："+endPoint)
                                break;
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 16:
                        case 17:
                        case 18:
                        case 19:this.walkingToLeft(this.latticeWH);// 向左
                                ++this.ChessPositionNum;
                                console.log("当前位置："+this.ChessPositionNum+";目标位置："+endPoint)
                                break;
                        case 5:
                        case 10:
                        case 15:
                        case 20:this.walkingToTop(this.latticeWH);//向上
                                ++this.ChessPositionNum;
                                console.log("当前位置："+this.ChessPositionNum+";目标位置："+endPoint)
                                break;
                    }
                }
            },2000)
        },
        //向右行走
        walkingToRight(target){
            var oDiv =document.getElementById("piece");
            var count=0
            clearInterval(this.timer);
            this.timer = setInterval(function(){
                var speed = (target - count)/20;
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
        //向左行走
        walkingToLeft(target){
            var oDiv =document.getElementById("piece");
            var count = 0
            clearInterval(this.timer);
            this.timer = setInterval(function(){
                var speed = (target - count)/20;
                speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
                if(count == target){
                    clearInterval(this.timer);
                }
                else{
                    oDiv.style.left = oDiv.offsetLeft - speed + 'px';
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
                var speed = (target - count)/20;
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
        //向下行走
        walkingToBottom(target){
            var oDiv =document.getElementById("piece");
            var count = 0
            clearInterval(this.timer);
            this.timer = setInterval(function(){
                var speed = (target - count)/20;
                speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
                if(count == target){
                    clearInterval(this.timer);
                }
                else{
                    oDiv.style.top = oDiv.offsetTop + speed + 'px';
                    count = count + speed
                }
            },30);
        },
    },
    
}
</script>

<style scoped>
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
    background: url("../assets/images/game/checkerboard.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
    position: relative;
}
#piece{
    width: 120px;
    height: 120px;
    position:absolute;
    top: 480px;
    left: 0px;
}

p{
    width: 80%;
    color: #fff;
    font-size: 28px;
    line-height: 40px;
    margin: 20px auto 0;
    text-align: center;    
}
.play{
    width: 400px;
    margin: 50px auto 0;
}

</style>
