<template>
  <div id="app">
      <loading v-if="loadingShow" :count="count"></loading>
      
      <div class="escBut" @click="esc">
        <img src="static/images/esc.png" alt="">
      </div>
      <router-view/>
  </div>
</template>

<script>
import loading from "@/components/loading.vue"

export default {
  name: 'App',
  data(){
    return{
      loadingShow:true,
      count:0
    }
  },
  components:{
    loading,
  },
  mounted(){
    this.loading()
  },
  
  methods:{
    esc(){
      if (this.$route.path === '/') {
        this.$router.back(-1)
      } else {
        this.$router.push('/')
      }
    },
    loading(){
      let imgs=[
        "static/images/esc.png",
        "static/images/bg.png",
        "static/images/index/capingRun.png",
        "static/images/game/capingRun_min.png",
        "static/images/game/checkerboard_gray.pn",
        "static/images/game/checkerboard_bright_1.png",
        "static/images/game/checkerboard_bright_2.png",
        "static/images/game/checkerboard_bright.png",
        "static/images/game/piece.png",
        "static/images/game/flag.png",
        "static/images/game/paly_button.png",
        "static/images/game/dice_button.png",
        "static/images/game/BulletBox/200coins_button.png",
        "static/images/game/dice_Animated.gif",
        "static/images/game/BulletBox/shutDown.png",
        "static/images/game/BulletBox/Gift_call.png",
        "static/images/game/BulletBox/share_button.png",
        "static/images/game/coins.png",
        "static/images/game/BulletBox/Gift_phone.png",
        "static/images/game/BulletBox/load_button.png",
        "static/images/game/BulletBox/network_error.png",
        "static/images/game/BulletBox/NoCoins.png",
        "static/images/game/BulletBox/goLogin_button.png",
        "static/images/game/BulletBox/UnLogin.png",
        "static/images/game/BulletBox/GiftBox_n.png",
        "static/images/game/BulletBox/GiftBox.png",
        "static/images/game/BulletBox/CallCharge_share.png",
        "static/images/game/BulletBox/Coins_1.png",
        "static/images/game/BulletBox/Coins_2.png",
        "static/images/game/BulletBox/Coins_3.png",
        "static/images/game/BulletBox/Coins_4.png"
      ]

      for(let img of imgs){
        let image = new Image()
        image.src = img
        image.onload = () =>{
          this.count++
          if(this.count==30){
            this.loadingShow = false
          }
        }
      }
    }
  },
  
}
</script>

<style>
  @import "../static/css/reset.css";

  @font-face {
    font-family: OpenSans-Bold;
    src: url('../static/font/OpenSans-Bold.ttf');
  }
  @font-face {
      font-family: OpenSans-Regular;
      src: url('../static/font/OpenSans-Regular.ttf');
  }
  @font-face {
      font-family: OpenSans-SemiBold;
      src: url('../static/font/OpenSans-SemiBold.ttf');
  }

  body{
    margin:  0 auto;
    background-color: #020031;
  }
  #app{
    background: url("../static/images/bg.png") no-repeat;
    background-size: 100% 100%;
    padding-top:30px;
  }
  .bgImg{
    width: 100%;
    height: 700px;
    background-color: #4944cf73;
  }
  button{
    border:0;
  }
  img{
    width: 100%;
  }
  .escBut{
    width: 200px;
    margin-left: 40px;
  }
</style>
