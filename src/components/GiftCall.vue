<template>
    <div id="GiftCall" @touchmove.prevent>
        <div class="white">
            <div class="end" @click="closeGiftCall">
                <img src="static/images/game/BulletBox/shutDown.png" alt="">
            </div>
            <div class="centont">
                <h3>Pulsa Rp {{getCallCharge}}</h3>
                <p>Masukkan nomor ponsel kamu</p>
                <div class="input">
                    <input :class="inputClass" type="number" v-model="phoneNum" placeholder="Contoh:081234657890">
                </div>
                <div class="button" @click="submit">
                   Oke
                </div>
            </div>
        </div>
        <div class="header_img">
            <img src="static/images/game/BulletBox/Gift_call.png" alt="">
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props:["getCallCharge"],
    data(){
        return{
            phoneNum:null,
            inputClass:"telInput"
        }
    },
    methods: {
        closeGiftCall(){
            this.$emit('on-close')
        },
        submit(){
            var verifyPhone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if(this.phoneNum){
                if(this.phoneNum.length==0) { 
                    this.inputClass = "noTelInput"
                    alert('手机号码不能为空！');
                } else if(this.phoneNum.length!=11) { 
                    this.inputClass = "noTelInput"
                    alert('请输入有效的手机号码，需是11位！');
                }else if(!verifyPhone.test(this.phoneNum)){ 
                    this.inputClass = "noTelInput"
                    alert('请输入有效的手机号码！'); 
                }else{
                    alert("phone:"+this.phoneNum)
                    //—————————————————————————————————————————————————————————————————————
                    // 需要跟换接口————————————————————————————————————————————————————————
                    //—————————————————————————————————————————————————————————————————————
                    axios.post("/set/Info").then(res=>{
                        console.log(res)
                        if(res.data.data.code==0){
                            this.closeGiftCall()
                        }
                    }).catch(error=>{

                    })
                }
            }else{
                alert('手机号码不能为空！');
            }
            
        }
    },
    watch:{
        "phoneNum":function(){
            var verifyPhone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if(this.phoneNum){
                if(this.phoneNum.length==0) { 
                
                } else if(this.phoneNum.length!=11) { 
                    
                }else if(!verifyPhone.test(this.phoneNum)){ 
                    
                }else{
                    this.inputClass = "telInput"
                }
            }
        }
    }
}
</script>

<style scoped>
#GiftCall{
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
    height: 540px;
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
.header_img{
    width: 300px;
    margin: 0 auto;
    position: relative;
    top:-720px;
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
.input{
    width: 400px;
    margin: 20px auto 20px;
}
.telInput{
    border:#66C69D 2px solid;
    border-radius: 50px;
    width: 100%;
    height: 100px;
    padding-left: 50px;
    padding-right: 50px;
    position: relative;
    left: -50px;
}
.noTelInput{
    border:red 2px solid;
    border-radius: 50px;
    width: 100%;
    height: 100px;
    padding-left: 50px;
    padding-right: 50px;
    position: relative;
    left: -50px;
}

</style>

