<template>
  <div id="wrapper">
    <div id="header">
      <a href="" class="logo">
        <img src="../assets/images/bg/logo.png" alt="" width="70px" />
      </a>
      <div id="menu">
        <div class="item">
          <router-link class="link" :to="{name: 'Home'}">
            Trang chủ
          </router-link>
        </div>
        <div class="item">
          <router-link class="link" :to="{name: 'News'}">
            Tin tức
          </router-link>
        </div>
        <div class="item">
          <router-link class="link" :to="{name: 'Discount'}">
            Khuyến mãi
          </router-link>
        </div>
        <div class="item">
          <router-link class="link" :to="{name: 'Contact'}">
            Liên hệ
          </router-link>
        </div>
      </div>
      <div v-if="auth.login" id="actions">
        <div class="item">
          <img src="../assets/images/bg/user.png" alt="" />
        </div>
        <div @click="gotoCart" class="item">
          <img src="../assets/images/bg/cart.png" alt="" />
        </div>
        <div class="item">
          <i
            @click="auth.logout()"
            class="fa-solid fa-arrow-right-from-bracket"
          ></i>
        </div>
      </div>
      <div v-else id="actions">
        <div class="item">
          <router-link class="link" :to="{ name: 'SignIn' }"
            >ĐĂNG NHẬP</router-link
          >
        </div>
        <div class="item">
          <router-link class="link" :to="{ name: 'SignUp' }"
            >ĐĂNG KÝ</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { authStore } from "../store/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const auth = authStore();
    const router = useRouter();
    function gotoCart() {
      router.push({ name: "Cart" });
    }

    return {
      auth,
      gotoCart,
    };
  },
};
</script>

<style scoped>
#wrapper {
  width: 100%;
}
#header {
  width: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: yellow;
}
#menu {
  list-style: none;
  display: flex;
}
#menu .item {
  margin: 0px 25px;
}

.link{
  color: rgb(19, 18, 18);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
}


#actions {
  display: flex;
  align-items: center;
  justify-content: center;
}
#actions .item {
  margin-left: 20px;
}

.fa-solid.fa-arrow-right-from-bracket {
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

#actions .item img:hover {
  cursor: grab;
}
</style>
