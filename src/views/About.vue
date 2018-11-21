<template>
<div>
  <div class="container">
    
    <div class="blog" v-for="(blog,index) in blogs">
      <div class="border">
        <h3>{{blog.text}}</h3>
      </div>
      <img :src="blog.img"/>
    </div>
    
  <div class="about">
    <h1>Name</h1>
    <input v-on:enter="addUser" v-model="str" placeholder="..."> </input>
    <div class="col-100">
    <button v-on:click="addUser">Add</button>
    </div>
  </div>
  <div class="user" v-for="(user,index) in users">
    <h1> {{user}}</h1>
    <h2>{{user}}</h2>
  </div>
  </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      staff: this.$store.state.staff,
      str: "",
      users: this.$store.state.users,
      blogs: this.$store.state.blogs
    };
  },
  methods: {
    addUser() {
      console.log("Adding User," + this.str);
      this.$store.commit("addUser", this.str);
      console.log(this.$store.state.users);
    }
  },

  created: function() {
    this.$store.commit("getUsers");
  }
};
</script>

<style scoped lang="scss">
$bgColor: rgb(30, 35, 44);
$btColor: rgb(58, 88, 145);
$bthColor: rgb(50, 29, 65);

@keyframes slideIn {
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

body {
  background-color: $bgColor;
}

.container {
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  animation: 1s slideIn;
}

.col-100 {
  width: 100%;
}

%frame {
  background-color: $bgColor;
  color: white;
  min-height: 400px;
  padding: 20px;

  h1 {
    font-weight: 100;
    animation: fadeIn 1s;
  }
  h2 {
    font-weight: 100;
    animation: fadeIn 2s;
  }
  button {
    background-color: $btColor;
    color: white;
    font-size: 120%;
    font-weight: 200;
    width: 300px;
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 0px;
    &:hover {
      background-color: $bthColor;
      transition: 1s;
    }
  }

  input {
    width: 300px;
    height: 20px;
    text-align: center;
    font-size: 20px;
    padding: 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 0px;
    color: black;
    &:hover {
      background-color: cornflowerblue;
      transition: 1s;
    }
  }
}
.about {
  @extend %frame;
}
.user {
  @extend %frame;
  min-height: 200px;
  background-color: white;
}
.staff {
  @extend %frame;
  min-height: 200px;
}
.blog {
  @extend %frame;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  img {
    width: 100%;
    display: block;
    margin-top: -10px;
  }
  .border {
    background-color: white;
    h3 {
      padding: 10px;
      font-weight: 100;
      color: rgb(58, 62, 70);
    }
  }
}
</style>

