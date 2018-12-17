<template>
    <div id="loading">
        <img src="static/images/loading.gif" alt="">
        <canvas id="myCanvas"></canvas>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#loading{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #062734;
}
img{
    border:1px salmon solid;
    
}
</style>
