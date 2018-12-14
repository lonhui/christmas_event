<template>
    <div id="UserCoins" @touchmove.prevent>
        <div class="white">
            <div class="end" @click="closeUserCoins(false)">
                <img src="@/assets/images/game/BulletBox/shutDown.png" alt="">
            </div>
            <div class="centont">
                <p class="top_p">Kamu akan menggunakan <span>{{coinsNum}} Coin</span> untuk</p>
                <p>membuka kotak keberuntungan</p>
                <div class="button"  @click="closeUserCoins(true)">
                    Buka Kotak Sekarang
                </div>
                <p>BATAL</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["payType"],
    data(){
        return{
            coinsNum:200
        }
    },
    mounted(){
        alert("支付类型："+this.payType)
        switch(this.payType){
            case 0: this.coinsNum = 200;break;
            case 1: this.coinsNum = 400;break;
            case 2: this.coinsNum = 2000;break;
            case 3: this.coinsNum = 3500;break;
        }
    },
    methods: {
        closeUserCoins(whether){
            this.$emit('on-close',whether)
        }
    }
}
</script>

<style scoped>
#UserCoins{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(2, 17, 0, 0.6);
}
.white{
    width: 90%;
    height: 400px;
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
p{
    font-size: 28px;
    line-height: 50px;
    text-align: center;
    color: #145e38;
}
.top_p{
    margin-top: 80px;
}
span{
    font-weight: bold;
}
.button{
    width: 450px;
    border-radius: 50pc;
    background: linear-gradient(#ecb128, #a16f0c);
    margin: 50px auto 10px;
    text-align: center;
    line-height: 80px;
    color: #fff;
    font-weight: bold;
    font-size: 30px;
}

</style>

