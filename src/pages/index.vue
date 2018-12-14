<template>
    <div id="index">
        <div class="img">
            <img src="@/assets/images/index/capingRun.png" alt="">
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
    </div>
</template>

<script>
export default {
    data(){
        return {
            userId:undefined,
        }
    },
    mounted(){
        const url = window.location.href
        let uidArray = url.match(/[^a-zA-Z0-9]u{1,1}=([0-9\-]+)/)
        // let didArray = url.match(/[^a-zA-Z0-9]c{1,1}=([a-z0-9]+)/)
        let uid = uidArray[1]
        // let did = didArray[1]
        this.userId = uid
        // this.user.did = did
        alert(this.userId)
        this.setCookie(uid,1)
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
    color: #3B885E;
    font-size:40px;
    font-weight: bold;
    text-align: center;
    line-height: 80px;
    margin-top:50px;
}
.des{
    color: #fff;
    width: 80%;
    margin: 0 auto;
    font-size: 26px;
    text-align: center;
    line-height: 35px;
    margin-top:10px;
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
    width: 300px;
    border-radius: 50px;
    border: 2px #8cf0be solid;
    color: #8cf0be;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    line-height: 100px;
    background-color: rgba(255, 255, 255, 0)
}
.game{
    width: 300px;
    border-radius: 60px;
    background: linear-gradient(#66C69D, #3B885E);
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    line-height: 100px;
}
.treaty{
    text-align: center;
    line-height: 35px;
    margin-top: 100px;
}
.treaty span{
    color: #fff;
    font-size: 26px;
}

</style>
