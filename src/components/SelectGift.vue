<template>
    <div id="SelectGift" @touchmove.prevent>
        
        <div class="white">
            <div class="end" @click="closeSelectGift(0)">
                <img src="static/images/game/BulletBox/shutDown.png" alt="">
            </div>
            <div class="header">
                Pilih Hadiah
            </div>
            <div class="centont">
                <p class="top_p">Pilih salah satu kotak hadiah ini</p>
                <div class="box">
                    <div class="box_one">
                        <img :src="boxNum==1?boxY:boxN" @click="selectBox(1)">
                    </div>
                    <div class="box_two">
                        <img :src="boxNum==2?boxY:boxN" @click="selectBox(2)">
                    </div>
                    <div class="box_three">
                        <img :src="boxNum==3?boxY:boxN" @click="selectBox(3)">
                    </div>
                </div>
                <div class="button" v-if="boxNum==0">
                    Buka Kotak
                </div>
                <div class="button_yes" @click="openBox" v-if="boxNum!=0">
                    Buka Kotak
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import boxN from "../../static/images/game/BulletBox/GiftBox_n.png"
import boxY from "../../static/images/game/BulletBox/GiftBox.png"
import axios from 'axios'

export default {
    props:["boxType"],
    data(){
        return{
            boxN:boxN,
            boxY:boxY,
            boxNum:0,
        }
    },
    methods: {
        openBox(){
            console.log("盒子类型："+this.boxType)
            this.closeSelectGift(this.boxType)
        },
        closeSelectGift(num){ //0关闭,1开盒子1,2开盒子2,3开盒子3
            var selectStatus={
                num : num,
                boxNum : this.boxNum//标记选择的盒子
            }
            this.$emit('on-close',selectStatus)
        },
        selectBox(num){
            switch(num){
                case 1:this.boxNum = 1;break;
                case 2:this.boxNum = 2;break;
                case 3:this.boxNum = 3;break;
            }
        },
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
    height: 550px;
    background-color: #eefff5;
    margin:  280px auto 0;
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
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    color: #266b48;
    font-weight: 700;
}
.box{
    margin-top:25px;
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:flex-start;
    align-content:flex-start;
}
.box_one,.box_two,.box_three{
    width: 150px;
}
.button{
    width: 360px;
    border-radius: 50px;
    background-color: #B6D1C2;
    margin: 50px auto 10px;
    text-align: center;
    line-height: 110px;
    font-weight: bold;
    font-size: 30px;
    color: #93AFA0;
}
.button_yes{
    width: 360px;
    border-radius: 50px;
    background: linear-gradient(#57b98a, #458c65);
    margin: 50px auto 10px;
    text-align: center;
    line-height: 110px;
    color: #fff;
    font-weight: bold;
    font-size: 30px;
}

</style>

