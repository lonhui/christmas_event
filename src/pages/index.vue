<template>
    <div id="index">
        <div class="img">
            <img src="static/images/index/capingRun.png" alt="">
        </div>
        <h1>RUN FOR YOUR PRIZE!</h1>
        <p class="des">Bermain ular tangga dan dapatkan hadiah menarik di akhir permainan!</p>
        <div class="button">
            <router-link :to="{path:'rule/',query:{rule_id:0}}">
                <button class="rule">Cara Main</button>
            </router-link>
            <router-link :to="{path:'/game'}">
                <button class="game">Mulai Main</button>
            </router-link>
        </div>
        <p class="treaty">
            <router-link :to="{path:'rule/',query:{rule_id:1}}">
                <span>Syarat & Ketentuan</span>
            </router-link>
        </p>
        <!--广播 -->
        <!-- <div class="broadcast">
            <img src="static/images/index/horn.png" alt="">
            <div class="text">
                <span>ssssssss</span>
            </div>
        </div> -->

        <NoLogin v-if="NoLoginShow" @on-close="NoLoginShow=false"></NoLogin>
    </div>
</template>

<script>
import NoLogin from "@/components/NoLogin"

export default {
    data(){
        return {
            userId:null,
            NoLoginShow:false,
        }
    },
    components:{
        NoLogin
    },
    mounted(){
        const url = window.location.href
        let uidArray = url.match(/[^a-zA-Z0-9]u{1,1}=([0-9\-]+)/)
        // let didArray = url.match(/[^a-zA-Z0-9]c{1,1}=([a-z0-9]+)/)
        // let did = didArray[1]
        // this.user.did = did
        if(uidArray){
            let uid = uidArray[1]
            this.userId = uid
            this.setCookie(uid,1)
        }else  if (document.cookie.length>0) {
            var arr=document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
            for(var i=0;i<arr.length;i++){
                var arr2=arr[i].split('=');//再次切割
                //判断查找相对应的值
                if(arr2[0]=='uid'){
                    this.userId = arr2[1]//保存到保存数据的地方
                }
            }
            if(this.userId==null){this.NoLoginShow = true}
        }else{
            this.NoLoginShow = true
        }
    },
    methods:{
        setCookie(uid,exdays){
            var exdate = new Date();//获取时间
            exdate.setTime(exdate.getTime()+24*60*60*1000*exdays)//保存天数
            window.document.cookie="uid"+ "=" +uid+";path=/;expires="+exdate.toGMTString();
        }
    }
}
</script>

<style scoped>
#index{
    width: 90%;
    margin: 0 auto;
}
img{
    width: 100%;
}
.img{
    width: 95%;
    margin: 0 auto;
}
h1{ 
    color: #50ac7e;
    font-size:46px;
    font-weight: bold;
    text-align: center;
    line-height: 80px;
    margin-top:50px;
    font-family: OpenSans-Bold;
}
.des{
    color: #fff;
    width: 90%;
    margin: 0 auto;
    font-size: 28px;
    text-align: center;
    line-height: 45px;
    margin-top:10px;
    font-family: OpenSans-Regular;
}
.button{
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:flex-start;
    align-content:flex-start;
    margin-top:80px;
}
.rule{
    width: 292px;
    border-radius: 60px;
    border: 4px #8cf0be solid;
    color: #8cf0be;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    line-height: 92px;
    background-color: rgba(255, 255, 255, 0);
}
.game{
    width: 300px;
    border-radius: 60px;
    background: linear-gradient(#66C69D, #3B885E);
    color: #fff;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    line-height: 100px;
}
.treaty{
    text-align: center;
    line-height: 35px;
    margin-top: 100px;
    font-family: OpenSans-Regular;
}
.treaty span{
    color: #fff;
    font-size: 26px;
}

/* 开启广播可开 */
/* .broadcast{
    width: 80%;
    height: 50px;
    margin:20px auto 0;
    overflow: hidden;
    position:relative;
}
.broadcast img{
    position:absolute;
}
.broadcast .text{
    color: #fff;
    font-size: 30px;
    line-height: 38px;
    position: absolute;
    left: 50px;
}
.broadcast span{
     position: relative;
     left: 0;
} */

</style>
