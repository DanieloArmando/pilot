import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    staff: JSON.parse(localStorage.getItem('staff')) ? JSON.parse(localStorage.getItem('staff')) : [
      {name: 'Armando', password: 'password'},
      {name: 'Daniel', password: 'password'}
    ],

    //usersDaniel: JSON.parse(window.localStorage.getItem("users")),
    users: []
  },
  mutations: {
    changeName: (state, [index, name]) => {
      state.staff[index].name = name;
      localStorage.setItem('staff', JSON.stringify(state.staff))
      router.push({name: 'users'})
    },
    loadUsers: (state) => {
      console.log(JSON.parse(localStorage.getItem('staff')))
    },
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
