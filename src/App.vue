<template>
  <div id="app">
      <div class="escBut" @click="esc">
        <img src="@/assets/images/esc.png" alt="">
      </div>
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    esc(){
      console.log(this.$route.path)
      if (this.$route.path === '/') {
        this.$router.back(-1)
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
  @import "../static/css/reset.css";
  body{
    /* width: 750px;
    height: 1334px; */
    margin:  0 auto;
    background-color: #020031;
  }
  #app{
    background: url("./assets/images/bg.png") no-repeat;
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
