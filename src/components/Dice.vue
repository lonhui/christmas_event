<template>
    <div id="Dice" @click="closeDice" @touchmove.prevent>
        <div class="white">
            <div class="dice">
                <img src="static/images/game/dice_Animated.gif" alt="" v-if="DiceNumber==0">
                <!-- 6 -->
                <div class="dice_num1" v-if="DiceNumber==6">
                    <div class="top">
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                    <div class="center">
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                    <div class="bottom">
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                </div>
                <!-- 5 -->
                <div class="dice_num1" v-if="DiceNumber==5">
                    <div class="top">
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                    <div class="center">
                        <div class="point"></div>
                    </div>
                    <div class="bottom">
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                </div>
                <!-- 4 -->
                <div class="dice_num1" v-if="DiceNumber==4">
                    <div class="top_2">
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                    <div class="bottom_2">
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                </div>
                <!-- 3 -->
                <div class="dice_num1" v-if="DiceNumber==3">
                    <div class="top_3">
                        <div class="point"></div>
                    </div>
                     <div class="center_3">
                        <div class="point"></div>
                    </div>
                    <div class="bottom_3">
                        <div class="point"></div>
                    </div>
                </div>
                <!-- 2 -->
                <div class="dice_num1" v-if="DiceNumber==2">
                    <div class="top_2">
                        <div class="point"></div>
                    </div>
                    <div class="bottom_2">
                        <div class="point"></div>
                    </div>
                </div>
                <!-- 1 -->
                <div class="dice_num1" v-if="DiceNumber==1">
                    <div class="bottom_1" >
                        <div class="point"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["diceCount"],
    data(){
        return{
            DiceNumber:0
        }
    },
    mounted(){
        console.log("本次骰子点数："+this.diceCount)
        setTimeout(()=>{
            this.DiceNumber = this.diceCount
        },2000)
    },
     methods: {
        closeDice(){
            if(this.DiceNumber!=0){
                this.$emit('on-close',this.DiceNumber)
            }
        }
    }
}
</script>

<style scoped>
#Dice{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(2, 17, 0, 0.6);
}
.white{
    width: 300px;
    height: 300px;
    background-color: #fff;
    margin: 400px auto 0;
    border-radius: 30px;
}
.dice{
    width: 200px;
    height: 200px;
    margin: 0 auto;
    padding-top:50px;
}
.dice_num1{
    width: 200px;
    height: 200px;
    border-radius: 20px;
    background-color: #D4312E;
    border:#000 1px solid;
}
.top,.center,.bottom{
    padding-top: 5px;
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:flex-start;
    align-content:flex-start;
}
.top_3,.center_3,.bottom_3{
    padding-top:5px;
}
.top_3{
    padding-left: 110px;
}
.bottom_3{
    padding-right: 110px;
}
.top_2,.bottom_2{
    padding-top: 26px;
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:flex-start;
    align-content:flex-start;
}
.bottom_1{
    padding-top: 69px;
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:flex-start;
    align-content:flex-start;
}
.point{
    width: 60px;
    height: 60px;
    margin: 0 auto;
    border-radius: 30px;
    background-color: #fff;
}
</style>
