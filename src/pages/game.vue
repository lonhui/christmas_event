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

        <button @click="walkingToTop(60)"> 上 </button>
        <button @click="walkingToBottom(60)"> 下 </button>
        <button @click="walkingToLeft(60)"> 左 </button>
        <button @click="walkingToRight(60)"> 右 </button>


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
            // 棋盘上格子对应的坐标
            ChessPosition:[
                {top:480,left:0},{top:480,left:120},{top:480,left:240},{top:480,left:360},{top:480,left:480},
                {top:360,left:0},{top:360,left:120},{top:360,left:240},{top:360,left:360},{top:360,left:480},
                {top:240,left:0},{top:240,left:120},{top:240,left:240},{top:240,left:360},{top:240,left:480},
                {top:120,left:0},{top:120,left:120},{top:120,left:240},{top:120,left:360},{top:120,left:480},
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
       
    },
    methods:{
        openDice(){
            this.DiceShow = true
        },
        closeDice(num){
            console.log(num)
            this.DiceShow = false
            var timing = null
            var count = 0
            timing = setInterval(()=>{
                if(count>=num){
                    clearInterval(this.timing)
                }else{
                    var coordinate = this.ChessPosition[this.ChessPositionNum-1]//棋子当前所在坐标
                    alert(this.ChessPositionNum)
                    if((this.ChessPositionNum>5&this.ChessPositionNum<10)||(this.ChessPositionNum>15&this.ChessPositionNum<20)){
                        // 向左
                        if(coordinate.left>0){
                            this.walkingToLeft(60)
                        }else{
                            this.walkingToTop(60)//向上
                        }
                    }else{
                        //向右
                        if(coordinate.left<480){
                            this.walkingToRight(60)
                        }else{
                            this.walkingToTop(60)//向上
                        }
                    }
                    ++this.ChessPositionNum
                    count++
                }
            },1000)
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
