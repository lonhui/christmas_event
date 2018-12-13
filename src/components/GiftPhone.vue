<template>
    <div id="GiftPhone">
        <div class="white">
            <div class="end" @click="closeGiftPhone">
                <img src="@/assets/images/game/BulletBox/shutDown.png" alt="">
            </div>
            <div class="centont">
                <p class="header_p">Kamu Mendapatkan 1 Unit</p>
                <h3>OPPO A3S</h3>
                <p>Username Caping</p>
                <div class="input">
                    <input type="text" v-model="userName" placeholder="Username Caping Kamu">
                </div>
                <p>Nomor HP</p>
                <div class="input">
                    <input type="number" v-model="phoneNum" placeholder="Contoh:081234657890">
                </div>
                <p>Alamat Emali</p>
                <div class="input">
                    <input type="emali" v-model="emali" placeholder="Contoh:caping@gmail.com">
                </div>
                <div class="button" @click="submit">
                   Kirim
                </div>
            </div>
        </div>
        <div class="header_img">
            <img src="@/assets/images/game/BulletBox/Gift_phone.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userName:null,
            phoneNum:null,
            emali:null,
        }
    },
    methods: {
        closeGiftPhone(){
            this.$emit('on-close')
        },
        submit(){
            alert(
                "namme:"+this.userName+";"+"phone:"+this.phoneNum+";"+"emali:"+this.emali
            )
        }
    }
}
</script>

<style scoped>
#GiftPhone{
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
    margin:  200px auto 0;
    border-radius: 50px 50px 50px 50px;
    border: #56bc8c 10px solid;
    position: relative;
}
.centont{
    width: 80%;
    margin: 0 auto;
}
.header_p{
    padding-top:180px;
    font-weight: bold;
}
h3{
    font-size: 36px;
    font-weight: bolder;
    text-align: center;
    line-height: 70px;
    color: #145e38;
}
p{
    font-size: 26px;
    line-height: 40px;
    text-align: center;
    color: #145e38;
    font-weight: bold;
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
    top:-1130px;
}
.button{
    width: 300px;
    border-radius: 50pc;
    background: linear-gradient(#66C69D, #3B885E);
    margin: 50px auto 30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
    font-weight: bold;
    font-size: 30px;
}
.input{
    width: 400px;
    margin: 20px auto 20px;
}
input{
    border:#66C69D 2px solid;
    border-radius: 50px;
    width: 100%;
    height: 100px;
    padding-left: 50px;
    padding-right: 50px;
    position: relative;
    left: -50px;
}

</style>

