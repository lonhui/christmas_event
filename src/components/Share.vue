<template>
    <div id="Share" @touchmove.prevent>
        <div class="white">
            <div class="end" @click="closeShare">
                <img src="static/images/game/BulletBox/shutDown.png" alt="">
            </div>
            <div class="centont">
                <h3>SELAMAT!</h3>
                <!-- 话费 -->
                <p>Pulsa akan dikirim ke nomor kamu<br>dalam maksimal 3x24 jam</p>
                <!-- 手机 -->
                <!-- <p>Tim Caping akan menghubungi kamu<br>lewat email untuk proses lebih lanjut</p> -->
                <div class="button" @click="share">
                   <img src="static/images/game/BulletBox/share_button.png" alt="">
                </div>
                 <div class="footer">
                    <p @click="closeShare">MAIN LAGI</p>
                </div>
            </div>
        </div>
        <div class="header_img_call" v-if="shareType==1">
            <img src="static/images/game/BulletBox/CallCharge_share.png" alt="">
        </div>
        <div class="header_img_phone" v-if="shareType==0">
            <img src="static/images/game/BulletBox/Gift_phone.png" alt="">
        </div>
       
    </div>
</template>

<script>
export default {
    props:["shareType"],
    created(){
        window.shareSucceed = this.shareSucceed;
        var that = this
    },
    methods: {
        closeShare(){
            this.$emit('on-close')
        },
        shareSucceed(){this.closeShare()},
        share(){
            let title = 'Dukung Indonesia di Caping dan raih koin sebanyak mungkin!'
            let content = 'Dukung Indonesia di Caping dan raih koin sebanyak mungkin!'
            let pic = null
            var url ='http://campaign.caping.co.id/dukungindonesia/'
            CapingJs.share(title, content,url,pic)
        }
    }
}
</script>

<style scoped>
#Share{
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
    margin-top: 120px;
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
.header_img_call{
    width: 350px;
    margin: 0 auto;
    position: relative;
    top:-720px;
}
.header_img_phone{
    width: 300px;
    margin: 0 auto;
    position: relative;
    top:-720px;
}
.button{
    width: 300px;
    margin: 50px auto 10px;
}
.footer{
    margin: 20px auto 30px;
}
</style>

