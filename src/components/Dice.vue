<template>
    <div id="Dice" @click="closeDice">
        <div class="white">
            <div class="dice">
                <img src="@/assets/images/game/dice_Animated.gif" alt="" v-if="DiceNumber==0">
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
                    <div class="top" style="padding-top: 16.5px">
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                    <div class="bottom" style="padding-top: 16.5px">
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                </div>
                <!-- 3 -->
                <div class="dice_num1" v-if="DiceNumber==3">
                    <div class="top">
                        <div class="point" style="position: relative;left: 30px;"></div>
                    </div>
                     <div class="center">
                        <div class="point"></div>
                    </div>
                    <div class="bottom">
                        <div class="point" style="position: relative;left: -30px;"></div>
                    </div>
                </div>
                <!-- 2 -->
                <div class="dice_num1" v-if="DiceNumber==2">
                    <div class="top">
                        <div class="point" style="margin-top: 12.5px"></div>
                    </div>
                    <div class="bottom">
                        <div class="point" style="margin-top: 12.5px"></div>
                    </div>
                </div>
                <!-- 1 -->
                <div class="dice_num1" v-if="DiceNumber==1">
                    <div class="bottom">
                        <div class="point" style="width:40px;height:40px;border-radius:30px;margin-top: 25px"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            DiceNumber:0
        }
    },
    mounted(){
        var diceNumber = Math.floor(Math.random()*5)+1//随机生成1~6点数，后期调接口从后台获取
        console.log(diceNumber)
        setTimeout(()=>{
            this.DiceNumber = diceNumber
        },3000)
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
}
.top,.center,.bottom{
    padding-top: 12.5px;
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:flex-start;
    align-content:flex-start;
}
.point{
    width: 50px;
    height: 50px;
    border-radius: 30px;
    background-color: #fff;
}
</style>
