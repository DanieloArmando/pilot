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
      { id: 0, name: "Daniel", text: "Coolio", img: "https://66.media.tumblr.com/08ba7c2165b5d9de3791913c0f1d66d6/tumblr_pii0roQFkA1vdi84io1_1280.jpg" }
      , { id: 1, name: "Olle", text: "Spännande Tider", img: "https://66.media.tumblr.com/f69c7bcf35f418be8ea13f32facf2330/tumblr_p9kjxqkjRq1qdtql4o1_500.png" }
      , { id: 2, name: "Lisa", text: "Hmm", img: "https://66.media.tumblr.com/f0581aa75bd5349d99fd8644f5bcb2ac/tumblr_pbs6ecmiL61qdtql4o1_500.png" }

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
    },

    postBlog(state, blog) {
      state.blogs.push(blog);
      let reqinfo = {
        credentials: "same-origin",
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog),
      }
      fetch('http://localhost:3000/api/blog', reqinfo).then((res) => {
        return res.json();
      }).then((res) => {
        console.log(JSON.stringify(res));
      });
    }

  },
  actions: {

  }
})
