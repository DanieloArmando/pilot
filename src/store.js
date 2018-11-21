import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    staff: JSON.parse(localStorage.getItem('staff')) ? JSON.parse(localStorage.getItem('staff')) : [
      { name: 'Armando', password: 'password' },
      { name: 'Daniel', password: 'password' }
    ],

    //usersDaniel: JSON.parse(window.localStorage.getItem("users")),
    users: [],
    blogs: [
      { id: 0, name: "Daniel", text: "Coolio", img: "https://66.media.tumblr.com/7a340bff5631b3ae04b122122a02f8f3/tumblr_pgxipwFC9V1vm9ssvo1_500.png" }
      , { id: 1, name: "Olle", text: "Spännande Tider", img: "https://66.media.tumblr.com/2dc1b616409956d3bb67c97feaea4214/tumblr_p45c8hwRE41sfls6mo1_500.gif" }
      , { id: 2, name: "Lisa", text: "Hmm", img: "https://66.media.tumblr.com/74b0ce3e46982dff6771da76e218c98a/tumblr_phlczxJoAU1rxqtybo1_500.jpg" }

    ]
  },
  mutations: {
    changeName: (state, [index, name]) => {
      state.staff[index].name = name;
      localStorage.setItem('staff', JSON.stringify(state.staff))
      router.push({ name: 'users' })
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
