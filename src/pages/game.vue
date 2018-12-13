<template>
    <div id="game">
        <div class="img">
            <img src="@/assets/images/game/capingRun_min.png" alt="">
        </div>
        <div id="checkerboard" :class="checkerboard">
            <div id="piece">
                <img src="@/assets/images/game/piece.png" alt="">
            </div>
            <div class="giftBox1" @click="openGiftBox(1)"></div>
            <div class="giftBox2" @click="openGiftBox(2)"></div>
            <div class="giftBox3" @click="openGiftBox(3)"></div>
        </div>
        <p>Lempar dadumu dan selesaikan permainan untuk kesempatan dapetin <span>Grand Prize!</span></p>
        <div class="play">
            <img src="@/assets/images/game/paly_button.png" @click="openDice" alt="">
        </div>

        <br><br><br>
        <button @click="zoomOut">缩小</button>
        <button @click="amplification">放大</button>
        <button @click="transfer(23)">传送</button>

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
            checkerboard:"checkerboard_gray",//棋盘class,用于更换棋盘背景
            toTheTop:false,//到顶，false正常走  ture方向走
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
        openGiftBox(boxNum){
            alert("打开 "+boxNum+" 号盒子")
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
        //判断是否转换背景图
        conversionBackImg(){
            if(this.ChessPositionNum < 8){
                this.checkerboard = "checkerboard_gray"
            }else if(this.ChessPositionNum >= 8 && this.ChessPositionNum < 17){
                this.checkerboard = "checkerboard_bright_1"
            }else if(this.ChessPositionNum >= 17 && this.ChessPositionNum < 25){
                this.checkerboard = "checkerboard_bright_2"
            }else if(this.ChessPositionNum == 25){
                this.checkerboard = "checkerboard_bright"
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
                        // this.zoomOut()
                        // setTimeout(()=>{
                            this.transfer(8)
                        //     this.amplification()
                        // },1200)
                        break;
                case 8:
                        alert("中奖了！")
                        break;
                case 13:
                        // this.zoomOut()
                        // setTimeout(()=>{
                            this.transfer(10)
                        //     this.amplification()
                        // },1200)
                        break;
                case 17:
                        alert("中奖了！")
                        break;
                case 18:
                        // this.zoomOut()
                        // setTimeout(()=>{
                            this.transfer(22)
                        //     this.amplification()
                        // },1200)
                        break;
                case 24:
                        // this.zoomOut()
                        // setTimeout(()=>{
                            this.transfer(15)
                        //     this.amplification()
                        // },1200)
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
        // 缩小
        zoomOut(){
            var timeing = null
            var oDiv = document.getElementById("piece");
            let Pwidth = window.getComputedStyle(oDiv).width
            let speed = Number(Pwidth.substring(0,Pwidth.length-2))
            clearInterval(timeing)
            timeing = setInterval(()=>{
                --speed
                if(speed==0){
                    clearInterval(this.timer);
                }else{
                    oDiv.style.width = speed+"px"
                }
            },20);
        },
        // 放大
        amplification(){
            var timeing = null
            var oDiv = document.getElementById("piece");
            let speed = 0
            clearInterval(timeing)
            timeing = setInterval(()=>{
                ++speed
                if(speed>=this.latticeWH){
                    clearInterval(this.timer);
                }else{
                    oDiv.style.width = speed+"px"
                }
            },20);
        }

    },
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
.checkerboard_gray{
    background: url("../assets/images/game/checkerboard_gray.png") no-repeat;
    background-size: 100% 100%;
}
.checkerboard_bright_1{
    background: url("../assets/images/game/checkerboard_bright_1.png") no-repeat;
    background-size: 100% 100%;
}
.checkerboard_bright_2{
    background: url("../assets/images/game/checkerboard_bright_2.png") no-repeat;
    background-size: 100% 100%;
}
.checkerboard_bright{
    background: url("../assets/images/game/checkerboard_bright.png") no-repeat;
    background-size: 100% 100%;
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
