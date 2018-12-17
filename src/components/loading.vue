<template>
    <div class="loading">
        <div id="Loading">
            <div class="loader-inner ball-beat">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        <div class="number">
                {{(count/30*100).toFixed(0)}}%
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["count"],
}
</script>

<style scoped>
.loading{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #020031;
}
.number{
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    line-height: 200px;
    text-align:center;
} 
#Loading {
    top:50%;
    left:50%;
    background-color: #020031;
    position: absolute;
    -webkit-transform: translateY(-50%)  translateX(-50%);
    transform: translateY(-50%)  translateX(-50%);
    z-index:100;
}
@-webkit-keyframes ball-beat {
    50% {
        opacity: 0.2;
        -webkit-transform: scale(0.75);
        transform: scale(0.75); 
    }
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1); 
    } 
}
@keyframes ball-beat {
    50% {
        opacity: 0.2;
        -webkit-transform: scale(0.75);
        transform: scale(0.75); 
    }
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1); 
    } 
}
.ball-beat > div {
    background-color: #279fcf;
    width: 15px;
    height: 15px;
    border-radius: 100% !important;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
    -webkit-animation: ball-beat 0.7s 0s infinite linear;
    animation: ball-beat 0.7s 0s infinite linear;
}
.ball-beat > div:nth-child(2n-1) {
    -webkit-animation-delay: 0.35s !important;
    animation-delay: 0.35s !important; 
}
</style>
