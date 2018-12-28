<template>
    <div id="GiftPhone" @touchmove.prevent>
        <div class="white">
            <div class="end" @click="closeGiftPhone(0)">
                <img src="static/images/game/BulletBox/shutDown.png" alt="">
            </div>
            <div class="centont">
                <p class="header_p">Kamu Mendapatkan 1 Unit</p>
                <h3>OPPO A3S</h3>
                <p>Username Caping</p>
                <div class="input">
                    <input class="userInput" type="text" v-model="userName" placeholder="Username Caping Kamu">
                </div>
                <p>Nomor HP</p>
                <div class="input">
                    <input :class="telInClass" type="number" v-model="phoneNum" placeholder="Contoh:081234657890">
                </div>
                <p>Alamat Emali</p>
                <div class="input">
                    <input :class="emaliInClass" type="emali" v-model="emali" placeholder="Contoh:caping@gmail.com">
                </div>
                <div class="button" @click="submit">
                   Kirim
                </div>
            </div>
        </div>
        <div class="header_img">
            <img src="static/images/game/BulletBox/Gift_phone.png" alt="">
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    props:["uid"],
    data(){
        return{
            userName:null,
            phoneNum:null,
            emali:null,
            telInClass:'telInput',
            emaliInClass:'emaliInput'
        }
    },
    methods: {
        closeGiftPhone(num){
            this.$emit('on-close',num)
        },
        submit(){
            var myregEmali = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            if(this.phoneNum && this.userName && this.emali){
                if(this.phoneNum.length==0) {
                    this.telInClass = "noInput"
                } if(!myregEmali.test(this.emali)){
                    this.emaliInClass = "noInput"
                }else{
                    axios.get(process.env.API_ROOT+"/dice/user/info",{
                        params:{
                            uid:this.uid,
                            phone:this.phoneNum,
                            email:this.emali,
                            userName:this.userName,
                        }
                    }).then(res=>{
                        if(res.data.code==0){
                            this.closeGiftPhone(1)
                        }
                    }).catch(error=>{
                        console.log(error)
                    })
                }
            }
        }
    },
    watch:{
        "phoneNum":function(){
            if(this.phoneNum){
                 if(this.phoneNum.length==0) {
                    
                } else{
                    this.telInClass = "telInput"
                }
            }
        },
        "emali":function(){
            var myregEmali = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            if(this.emali){
                if(!myregEmali.test(this.emali)){
                
                }else{
                    this.emaliInClass = "emaliInput"
                }
            }
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
    margin:  120px auto 0;
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
.noInput{
    border:red 2px solid;
    border-radius: 50px;
    width: 100%;
    height: 100px;
    padding-left: 50px;
    padding-right: 50px;
    position: relative;
    left: -50px;
}

.userInput,.telInput,.emaliInput{
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

