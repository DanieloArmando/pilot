import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    users: []
  },
  mutations: {
    add(state) {
      state.count++;
    },
    remove(state, item) {
      state.count = item;
    },
    addUser(state, user) {
      state.users.push(user);
    }
  },
  actions: {

  }
})
