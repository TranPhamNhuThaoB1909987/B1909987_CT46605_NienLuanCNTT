<template>
  <div class="containerCss">
    <div id="wrapper">
      <form @submit.prevent="getUser" id="form-signin">
        <h1 class="form-heading">ĐĂNG KÝ</h1>
        <div class="form-group">
          <label>Tên:</label>
          <input name="name" type="text" class="form-control" v-model="user.name"/>
        </div>
        <div class="form-group">
          <label>SĐT:</label>
          <input name="sdt" type="text" class="form-control" v-model="user.sdt"/>
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input name="email" type="email" class="form-control" v-model="user.email"/>
        </div>
        <div class="form-group">
          <label for="pwd">Mật khẩu:</label>
          <input name="password" type="password" class="form-control" id="pwd" v-model="user.password"/>
        </div>
        <div id="submit" class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="form-submit">ĐĂNG KÝ</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
    emits: ['submit:user'],
    setup(props, {emit}) {
        const user = reactive({
            name: "",
            sdt: "",
            email: "",
            password: "",
        });

        function getUser() {
            emit('submit:user', user);
        }

        return {
            user,
            getUser
        }
    }
}
</script>

<style scoped>
.containerCss {
  background: url("../assets/images/bg/burger_bg.jpg");
  background-size: cover;
  background-position-y: -60px;
  font-size: 20px;
}

#wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#form-signin {
  max-width: 400px;
  background: rgba(236, 227, 227, 0.8);
  flex-grow: 1;
  padding: 30px 30px 40px;
  box-shadow: 0px 0px 17px 2px rgba(240, 233, 233, 0.8);
}
.form-heading {
  font-size: 30px;
  color: #090909;
  text-align: center;
  margin-bottom: 30px;
}
#submit {
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-submit {
  background: transparent;
  border: 1px solid #171717;
  color: rgb(11, 10, 10);
  width: 100%;
  text-transform: uppercase;
  padding: 6px 10px;
  transition: 0.25s ease-in-out;
  margin-top: 30px;
  width: 100%;
}
.form-submit:hover {
  border: 1px solid #54a0ff;
}
</style>
