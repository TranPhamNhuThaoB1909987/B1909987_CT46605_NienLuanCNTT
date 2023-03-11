<template>
  <div id="wrapper">
        <div id="header">
            <a href="" class="logo">
                <img src="../assets/images/bg/logo.png" alt="" width="70px">
            </a>
            <div id="menu">
                <div class="item">
                    <a href="index.html">Trang chủ</a>
                </div>
                <div class="item">
                    <a href="menu.html">Thực đơn</a>
                </div>
                <div class="item">
                    <a href="discount.html">Khuyến mãi</a>
                </div>
                <div class="item">
                    <a href="contact.html">Liên hệ</a>
                </div>
            </div>
            <div v-if="auth.login" id="actions">
                <div class="item">
                    <img src="../assets/images/bg/user.png" alt="">
                </div>
                <div class="item">
                    <img src="../assets/images/bg/cart.png" alt="">
                </div>
                <div class="item">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i> 
                </div>
            </div>
            <div v-else id="actions">
                <div class="item">
                    <router-link class="link" :to="{name: 'SignIn'}">ĐĂNG NHẬP</router-link>
                </div>
                <div class="item">
                    <router-link class="link" :to="{name: 'SignUp'}">ĐĂNG KÝ</router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { authStore } from '../store/auth';
import { ref } from 'vue';
export default {
    setup() {
        const auth = authStore();
        return {
            auth
        }
    }
}
</script>

<style scoped>
#wrapper{
    width: 100%;
}
#header{
    width: 100%;
    padding: 0px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: yellow;
}
#menu{
    list-style: none;
    display: flex;
}
#menu .item{
    margin: 0px 25px;
}

.link,
#menu .item a{
    color: rgb(19, 18, 18);
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
}
#actions{
    display: flex;
    align-items: center;
    justify-content: center;
}
#actions .item{
    margin-left: 20px;
}

.fa-solid.fa-arrow-right-from-bracket{
    font-size: 30px;
    margin: 0px 20px;
    color: red;
}

.fa-solid.fa-arrow-right-from-bracket:hover {
    cursor: pointer;
}
#actions .item img {
    width: 25px;
}
</style>
