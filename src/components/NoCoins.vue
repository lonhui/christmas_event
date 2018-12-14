<template>
    <div id="NoCoins" @touchmove.prevent>
        <div class="white">
            <div class="end" @click="closeNoCoins">
                <img src="@/assets/images/game/BulletBox/shutDown.png" alt="">
            </div>
            <div class="centont">
                <h3>Oops,koin kamu tidak cukup!</h3>
                <p>Lakukan aktifitas di Caping untuk<br>meraih lebih banyak koin</p>
                <div class="button">
                   Oke
                </div>
            </div>
        </div>
        <div class="header_img">
            <img src="@/assets/images/game/BulletBox/NoCoins.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeNoCoins(){
            this.$emit('on-close')
        }
    }
}
</script>

<style scoped>
#NoCoins{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(2, 17, 0, 0.6);
}
.white{
    width: 89%;
    height: 480px;
    background-color: #eefff5;
    margin:  300px auto 0;
    border-radius: 50px 50px 50px 50px;
    border: #56bc8c 10px solid;
    position: relative;
}
.centont{
    width: 80%;
    margin: 0 auto;
}
h3{
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    line-height: 80px;
    margin-top: 130px;
    color: #145e38;
}
p{
    font-size: 28px;
    line-height: 40px;
    text-align: center;
    color: #145e38;
}
.end{
    width: 30px;
    float: right;
    position: relative;
    top: 20px;
    right: 20px;
}
.header_img{
    width: 320px;
    margin: 0 auto;
    position: relative;
    top:-670px;
}
.button{
    width: 300px;
    border-radius: 50pc;
    background: linear-gradient(#66C69D, #3B885E);
    margin: 50px auto 10px;
    text-align: center;
    line-height: 80px;
    color: #fff;
    font-weight: bold;
    font-size: 30px;
}

</style>

