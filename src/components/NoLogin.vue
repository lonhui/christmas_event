<template>
    <div id="NoLogin">
        <div class="white">
            <div class="end" @click="closeNoLogin">
                <img src="@/assets/images/game/BulletBox/shutDown.png" alt="">
            </div>
            <div class="centont">
                <h3>KAMU BELUM LOGIN</h3>
                <p>Masuk ke akun Caping untuk<br>mulai bermain</p>
                <div class="button">
                    <img src="@/assets/images/game/BulletBox/goLogin_button.png" alt="">
                </div>
            </div>
        </div>
        <div class="header_img">
            <img src="@/assets/images/game/BulletBox/UnLogin.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeNoLogin(){
            this.$emit('on-close')
        }
    }
}
</script>

<style scoped>
#NoLogin{
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
    margin:  400px auto 0;
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
    margin-top: 100px;
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
    top:-720px;
}
.button{
    width: 300px;
    margin: 50px auto 0;
}

</style>

