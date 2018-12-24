<template>
    <div id="GiftCoins" @touchmove.prevent>
        <div class="white">
            <div class="end" @click="closeGiftCoins(false)">
                <img src="static/images/game/BulletBox/shutDown.png" alt="">
            </div>
            <div class="header">
                SELAMAT
            </div>
            <div class="centont">
                <div class="box">
                    <div class="coin_left">
                        <span>{{leftCoin}}</span>
                        <img src="static/images/game/BulletBox/active_n.png" alt="" v-if="!status.leftBox">
                        <img src="static/images/game/BulletBox/active.png" alt="" v-if="status.leftBox">
                    </div>
                    <div class="coin_center">
                        <span>{{centerCoin}}</span>
                        <img src="static/images/game/BulletBox/active_n.png" alt="" v-if="!status.centerBox">
                        <img src="static/images/game/BulletBox/active.png" alt="" v-if="status.centerBox">
                    </div>
                    <div class="coin_right">
                        <span>{{rightCoin}}</span>
                        <img src="static/images/game/BulletBox/active_n.png" alt="" v-if="!status.rightBox">
                        <img src="static/images/game/BulletBox/active.png" alt="" v-if="status.rightBox">
                    </div>
                </div>
                <p>Kamu telah mendapatkan<br><span>{{getCoins}} Caping Coin!</span></p>
                <div class="button">
                    <div class="share_button" @click="share">
                        <img src="static/images/game/BulletBox/share_button.png" alt="">
                    </div>
                    <div class="pay_button" @click="closeGiftCoins(true)">
                        <p>Buka Lagi</p>
                        <div class="coins">
                            <img src="static/images/game/coins.png" alt="">
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
    props:["boxType","getCoins","selectBoxNum"],
    data(){
        return{
            status:{
                leftBox:false,
                centerBox:false,
                rightBox:false,
            },
            gifts:[],
            leftCoin:0,
            centerCoin:0,
            rightCoin:0,
            coinsNum:200,
        }
    },
    created(){
        window.shareSucceed = this.shareSucceed;
        var that = this
    },
    mounted(){
        switch(this.boxType){
            case 1: this.coinsNum = 400;
                    this.gifts = [200,350,500,700,1000]
                    break;
            case 2: this.coinsNum = 2000;
                    this.gifts = [1000,2000,3000,5000,7000]
                    break;
            case 3: this.coinsNum = 3500;
                    this.gifts = [1000,5000,10000,20000]
                    break;
        }
        let a = Math.floor(Math.random()*(this.gifts.length-1))
        let b = Math.floor(Math.random()*(this.gifts.length-2))
        switch(this.selectBoxNum){
            case 1: 
                    this.status.leftBox = true; 
                    this.leftCoin = this.getCoins + " Coin";
                    this.removeGift(this.getCoins)
                    this.centerCoin = this.gifts[a]
                    this.removeGift(this.centerCoin)
                    this.rightCoin = this.gifts[b]
                    break;
            case 2: 
                    this.status.centerBox = true;
                    this.centerCoin = this.getCoins + " Coin";
                     this.removeGift(this.getCoins)
                    this.leftCoin = this.gifts[a]
                     this.removeGift(this.leftCoin)
                    this.rightCoin = this.gifts[b]
                    break;
            case 3: 
                    this.status.rightBox = true;
                    this.rightCoin = this.getCoins + " Coin";
                    this.removeGift(this.getCoins)
                    this.centerCoin = this.gifts[a]
                     this.removeGift(this.centerCoin)
                    this.leftCoin = this.gifts[b]
                    break;
        }
    },
    methods: {
        closeGiftCoins(whether){
            this.$emit('on-close',whether)
        },
        shareSucceed(){this.closeGiftCoins(false)},
        share(){
            let title = 'Caping'
            let content = 'Yey! Aku baru saja dapetin koin Caping di event Caping Run. Kamu mau juga? (link download app)'
            let pic = null
            var url ='https://app.appsflyer.com/com.engloryintertech.caping?pid=Caping+Article'
            CapingJs.share(title, content,url,pic)
        },
        removeGift(num){
            for(let i = 0; i < this.gifts.length; i++){
                if(this.gifts[i]==num){
                    this.gifts.splice(i,1); 
                }
            }
        }

    },
    watch:{
        "status.leftBox":function(){
            if(this.status.leftBox){
                let boxDom = document.getElementsByClassName("coin_left")[0]
                boxDom.children[0].style.fontSize="0.38rem"
                boxDom.children[0].style.fontWeight="600"
                boxDom.children[0].style.width="100px"
                boxDom.children[0].style.left="0.85rem"
                boxDom.children[0].style.top="0.35rem"
            }
        },
        "status.centerBox":function(){
            if(this.status.centerBox){
                let boxDom = document.getElementsByClassName("coin_center")[0]
                boxDom.children[0].style.fontSize="0.38rem"
                boxDom.children[0].style.fontWeight="600"
                boxDom.children[0].style.width="100px"
                boxDom.children[0].style.left="0.85rem"
                boxDom.children[0].style.top="0.35rem"
            }
        },
        "status.rightBox":function(){
            if(this.status.rightBox){
                let boxDom = document.getElementsByClassName("coin_right")[0]
                boxDom.children[0].style.fontSize="0.38rem"
                boxDom.children[0].style.fontWeight="600"
                boxDom.children[0].style.width="100px"
                boxDom.children[0].style.left="0.85rem"
                boxDom.children[0].style.top="0.35rem"
            }
        },
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
    color: #fff;
    width: 100%;
    display: flex;
    font-size: 14px;
    padding-top: 50px;
}
.coin_left{
    position: relative;
}
.coin_left span{
    position:absolute;
    top:40px;
    left:55px;
}
.coin_center{
     position: relative;
}
.coin_center span{
    position:absolute;
     top:40px;
    left:55px;
}
.coin_right{
     position: relative;
}
.coin_right span{
    position:absolute;
     top:40px;
    left:55px;
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



</style>

