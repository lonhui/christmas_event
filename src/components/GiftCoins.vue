<template>
    <div id="GiftCoins" @touchmove.prevent>
        <div class="white">
            <div class="end" @click="closeGiftCoins(false)">
                <img src="@/assets/images/game/BulletBox/shutDown.png" alt="">
            </div>
            <div class="header">
                SELAMAT
            </div>
            <div class="centont">
                <div class="box">
                    <div class="coin_left">{{leftCoin}}</div>
                    <div class="coin_center">{{centerCoin}} Coin</div>
                    <div class="coin_right">{{rightCoin}}</div>
                </div>
                <p>Kamu telah mendapatkan<br><span>200 Caping Coin!</span></p>
                <div class="button">
                    <div class="share_button">
                        <img src="@/assets/images/game/BulletBox/share_button.png" alt="">
                    </div>
                    <div class="pay_button" @click="closeGiftCoins(true)">
                        <p>Buka Lagi</p>
                        <div class="coins">
                            <img src="@/assets/images/game/coins.png" alt="">
                            <span>{{coinsNum}} Coin</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    props:["boxType"],
    data(){
        return{
            leftCoin:700,
            centerCoin:200,
            rightCoin:1000,
            coinsNum:200,
        }
    },
    mounted(){
        switch(this.boxType){
            case 1: this.coinsNum = 400;break;
            case 2: this.coinsNum = 2000;break;
            case 3: this.coinsNum = 3500;break;
        }
    },
    methods: {
        closeGiftCoins(whether){
            this.$emit('on-close',whether)
        }
    }
}
</script>

<style scoped>
#GiftCoins{
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
}
.white{
    width: 90%;
    height: 650px;
    background-color: #eefff5;
    margin:  180px auto 0;
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
    width: 90%;
    margin: 0 auto;
}
.box{
    width: 100%;
    height: 220px;
    background: url("../assets/images/game/BulletBox/openGift.png") no-repeat;
    background-size: 100% 100%;
}
p{
    margin-top:30px;
    font-size: 28px;
    line-height: 50px;
    text-align: center;
    color: #266b48;
    font-weight: 600;
}
p span{
    font-size: 32px;
    font-weight:900;
    color: #0c5831;
}
.button{
    margin-top:30px;
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:flex-start;
    align-content:flex-start;
}
.share_button,.pay_button{
    width: 300px;
}
.pay_button{
    height: 105px;
    border-radius: 80px;
    background: linear-gradient(#ebb027, hsl(40, 65%, 41%));
    position: relative;
}
.pay_button p{
    margin-top:10px;
    color: #fff;
    font-size: 34px;
}
.coins{
    width: 160px;
    margin: 0  auto;
    padding-bottom: 100px;
}
.coins img{
    width: 24px;
}
.coins span{
    color: #fff;
    font-size: 26px;
}


.coin_left{
    color: #fff;
    font-size: 24px;
    position: relative;
    left: 70px;
    top:48px;
}
.coin_center{
    color: #fff;
    font-size: 34px;
    font-weight: 600;
    position: relative;
    left: 245px;
    top:16px;
}
.coin_right{
    color: #fff;
    font-size: 24px;
    position: relative;
    left: 485px;
    top:-8px;
}


</style>

