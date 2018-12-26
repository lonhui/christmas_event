<template>
    <div id="SelectGift" @touchmove.prevent>
        <div class="white">
            <div class="end" @click="closeSelectGift(0)">
                <img src="static/images/game/BulletBox/shutDown.png" alt="">
            </div>
            <div class="header">
                Hadiah Sesi {{boxStatus.boxType}}
            </div>
            <div class="centont">
                <p class="top_p">Kamu berkesempatan mendapatkan salah<br>satu dari hadiah di bawah ini!</p>
                <div class="box">
                    <div>
                        <div class="box_img">
                            <img :src="this.boxGift[0].img">
                        </div>
                        <p>{{boxGift[0].coin}}</p>
                    </div>
                    <div>
                        <div class="box_img">
                             <img :src="this.boxGift[1].img">
                        </div>
                        <p>{{boxGift[1].coin}}</p>
                    </div>
                    <div>
                        <div class="box_img">
                             <img :src="this.boxGift[2].img">
                        </div>
                        <p>{{boxGift[2].coin}}</p>
                    </div>
                     <div>
                         <div class="box_img">
                             <img :src="this.boxGift[3].img">
                         </div>
                        <p>{{boxGift[3].coin}}</p>
                    </div>
                </div>
                <div class="button" v-if="boxNum" @click="closeSelectGift(1)">
                    Ambil Hadiah
                </div>
                <div class="button_coin" v-if="!boxNum" @click="closeSelectGift(2)">
                    <p>Buka Lagi</p>
                    <div class="coins">
                        <img src="static/images/game/coins.png" alt="">
                        <span>{{coinsNum}} Coin</span>
                    </div>
                </div>
                <div class="footer">
                    {{boxNum?'Gratis 1x Ambil Perhari':'Atau tunggu selama'}}
                    <div class="time" v-if="!boxNum">{{countdown}}</div>
                </div>
                
            </div>
        </div>
    </div>
</template>


<script>

export default {
    props:["boxStatus","countdown"],
    data(){
        return{
            boxNum:false,//控制按钮显示
            boxType:undefined,
            coinsNum:200,
            boxGift:[
                {
                    img:"static/images/game/BulletBox/Coins_1.png",
                    coin:"350 Coin"
                },
                {
                    img:"static/images/game/BulletBox/Coins_2.png",
                    coin:"500 Coin"
                },
                {
                    img:"static/images/game/BulletBox/Coins_3.png",
                    coin:"700 Coin"
                },
                {
                    img:"static/images/game/BulletBox/Coins_4.png",
                    coin:"1000 Coin"
                },
            ]
        }
    },
    mounted(){
        if(this.boxStatus.dailyPackage > 0 || this.boxStatus.count>0){
            this.boxNum = true
        }
        switch(this.boxStatus.boxType){
            case 1: this.coinsNum = 400;break;
            case 2: 
                this.boxGift=[
                    {
                        img:"static/images/game/BulletBox/Coins_3.png",
                        coin:"1000 Coin"
                    },
                    {
                        img:"static/images/game/BulletBox/Coins_4.png",
                        coin:"7000 Coin"
                    },
                    {
                        img:"static/images/game/BulletBox/Gift_call.png",
                        coin:"Pulsa 10000"
                    },
                    {
                        img:"static/images/game/BulletBox/Gift_call.png",
                        coin:"Pulsa 25000"
                    },
                ]
                this.coinsNum = 2000;break;
            case 3: 
                this.boxGift=[
                    {
                        img:"static/images/game/BulletBox/Coins_3.png",
                        coin:"10000 Coin"
                    },
                    {
                        img:"static/images/game/BulletBox/Coins_4.png",
                        coin:"20000 Coin"
                    },
                    {
                        img:"static/images/game/BulletBox/Gift_call.png",
                        coin:"Pulsa 100000"
                    },
                    {
                        img:"static/images/game/BulletBox/Gift_phone.png",
                        coin:"Oppo A3S"
                    },
                ]
                this.coinsNum = 3500;break;
        }
    },
    methods: {
        closeSelectGift(num){   //num ,0 关闭，1免费开箱，2付费开箱
            this.$emit('on-close',num,this.boxStatus.boxType)
        },
    }
}
</script>

<style scoped>
#SelectGift{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(2, 17, 0, 0.6);
}
.header{
    width: 350px;
    border-radius: 50px;
    background: linear-gradient(#57b98a, #458c65);
    color: #fff;
    font-size: 40px;
    text-align: center;
    line-height: 90px;
    margin: 0 auto;
    position: relative;
    top:-45px;
    font-family: OpenSans-Regular;
}
.white{
    width: 90%;
    background-color: #eefff5;
    margin:  200px auto 0;
    border-radius: 50px 50px 50px 50px;
    border: #56bc8c 10px solid;
    position: relative;
}
.end{
    width: 30px;
    float: right;
    position: relative;
    top: 20px;
    right: 20px;
}
.centont{
    width: 95%;
    margin: 0 auto;
}
p{
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    color: #266b48;
    font-family: OpenSans-SemiBold;
}
.box{
    margin-top:25px;
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:flex-start;
    align-content:flex-start;
}
.box p{
     font-size: 24px;
}
.box_img{
    width: 150px;
    height: 150px;
}
.button{
    width: 360px;
    border-radius: 50px;
    background: linear-gradient(#57b98a, #458c65);
    margin: 50px auto 10px;
    text-align: center;
    line-height: 110px;
    color: #fff;
    font-weight: bold;
    font-size: 30px;
    font-family: OpenSans-Regular;
}
/* 付费按钮 */
.button_coin{
    width: 360px;
    height: 120px;
    border-radius: 80px;
    background: linear-gradient(#ebb027, hsl(40, 65%, 41%));
    margin: 50px auto 10px;
    position: relative;
}
.button_coin p{
    color: #fff;
    font-size: 34px;
    padding-top: 15px;
}
.coins{
    width: 160px;
    margin: 0  auto;
}
.coins img{
    width: 24px;
}
.coins span{
    color: #fff;
    font-size: 26px;
}
.footer{
    font-size: 26px;
    line-height: 50px;
    padding-bottom: 30px;
    text-align: center;
    color: #8DB09C;
}
.time{
    font-size: 28px;
    text-align: center;
    font-weight: 700;
    color: #8DB09C;
}
</style>

