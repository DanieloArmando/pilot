import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    //users: JSON.parse(window.localStorage.getItem("users")),
    users: []
  },
  mutations: {
    addUser(state, user) {
      state.users.push(user);
      window.localStorage.setItem("users", JSON.stringify(state.users));
    },
    getUsers(state) {
      let str = window.localStorage.getItem("users");
      if (str > 0) {
        let json = JSON.parse(str);
        state.users = json;
        console.log(state.users);
      }
      console.log(str);
    }

  },
  actions: {

  }
})
