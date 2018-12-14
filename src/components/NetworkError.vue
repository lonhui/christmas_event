<template>
    <div id="networkError" @touchmove.prevent>
        <div class="white">
            <div class="end" @click="closeNetworkError">
                <img src="@/assets/images/game/BulletBox/shutDown.png" alt="">
            </div>
            <div class="centont">
                <h3>Koneksi kamu tidak stabil</h3>
                <p>Periksa jaringan internet kamu</p>
                <div class="button">
                    <img src="@/assets/images/game/BulletBox/load_button.png" alt="">
                </div>
            </div>
        </div>
        <div class="header_img">
            <img src="@/assets/images/game/BulletBox/network_error.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeNetworkError(){
            this.$emit('on-close')
        }
    }
}
</script>

<style scoped>
#networkError{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(2, 17, 0, 0.6);
}
.white{
    width: 80%;
    height: 450px;
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
    width: 300px;
    margin: 0 auto;
    position: relative;
    top:-650px;
}
.button{
    width: 300px;
    margin: 50px auto 0;
}

</style>

