import { defineStore } from "pinia";
import userService from '../services/user';
import { useRouter } from 'vue-router';
export const authStore = defineStore("auth", {
  state: () => ({ userID: "", login: false, role: "guest", router: useRouter() }),
  getters: {
    getUserID: (state) => state.userID,
  },
  actions: {
    setLogin(USERID) {
      this.userID = USERID;
      this.login = true;
      localStorage.setItem("user", USERID);
    },

    checkUser() {
      if(document.cookie !=null && localStorage.getItem('user') != null){
        this.setLogin(localStorage.getItem('user'));
        this.login = true;
        userService.getUserByID(localStorage.getItem('user'))
          .then(user => {
            this.role = user.role;
          })
        console.log(this.role)
      }
    },

    logout(){
        this.login = false;
        this.userID = '';
        localStorage.removeItem('user');
        userService.signOut();
    }
  },
});
