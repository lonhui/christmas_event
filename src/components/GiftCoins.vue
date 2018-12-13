<template>
    <div id="SelectGift">
        <div class="white">
            <div class="end" @click="closeSelectGift(false)">
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
                    <div class="pay_button" @click="closeSelectGift(true)">
                        <img src="@/assets/images/game/BulletBox/200coins_button.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    data(){
        return{
            leftCoin:700,
            centerCoin:200,
            rightCoin:1000,
        }
    },
    methods: {
        closeSelectGift(whether){
            this.$emit('on-close',whether)
        }
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
}
.white{
    width: 90%;
    height: 650px;
    background-color: #eefff5;
    margin:  300px auto 0;
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
    height: 80px;
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

