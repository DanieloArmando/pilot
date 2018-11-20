import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {name: 'Armando', password: 'password'},
      {name: 'Daniel', password: 'password'}
    ]
  },
  mutations: {
    add(state) {
      state.count++;
    },
    changeName: (state, [index, name]) => {
      state.users[index].name = name;
      localStorage.setItem('users', JSON.stringify(state.users))
    },
    loadUsers: (state) => {
      console.log(JSON.parse(localStorage.getItem('users')))
    }
  }
})
