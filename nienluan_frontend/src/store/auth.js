import { defineStore } from "pinia";

export const authStore = defineStore("auth", {
  state: () => ({ userID: "", login: false }),
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
      }
    },

    logout(){
        this.login = false;
        this.userID = '';
        localStorage.removeItem('user');
    }
  },
});
