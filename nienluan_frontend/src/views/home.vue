<template>
    <div id="banner">
            <div class="box-left">
                <h2>
                    <span>THỨC ĂN</span>
                    <br>
                    <span>THƯỢNG HẠNG</span>
                </h2>
                <p>ĂN GÌ HÔM NAY ?
                    Thực đơn Buger Queen đa dạng và phong phú, có rất nhiều sự lựa chọn cho bạn, gia đình và bạn bè.
                </p>
                <button>Mua ngay</button>
            </div>
            <div class="box-right">
                <img src="../assets/images/bg/img1.jpg" alt="">
                <img src="../assets/images/bg/img2.jpg" alt="">
            </div>
        </div>
</template>

<script>
</script>

<style scoped>
#banner{
    width: 100%;
    background-image: url(../assets/images/bg/burger_bg.jpg);
    height: 463px;
    margin-top: 40px;
    display: flex;
    padding: 0px 133px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
#banner .box-left ,#banner .box-right{
    width: 50%;
}
#banner .box-left h2{
    font-size: 48px;
    margin-top: 75px;
    color: #fff;
}
#banner .box-left p{
    color: #fff;
}
#banner .box-left button{
    width: 191px;
    height: 40px;
    margin-top: 41px;
    background: #c01616;
    border: none;
    outline: none;
    color: #fff;
    font-weight: bold;
    border-radius: 20px;
    transition: 0.4s;
}
#banner .box-left button:hover{
    background: orange;
}
#banner .box-right{
    padding-left: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#banner .box-right img{
    margin: 0px 10px;
    animation: animation 3s infinite linear;
}
#banner .box-right img:nth-child(1){
    animation-delay: 0.5s;
}
#banner .box-right img:nth-child(2){
    animation-delay: 1s;
}
@keyframes animation {
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(-10px);
    }
    100%{
        transform: translateY(0px);
    }
}
</style>