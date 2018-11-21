<template>
<div>
  <div class="container">
  <div class="about">
    <h1>Name</h1>
    <input v-on:enter="addUser" v-model="str" placerholder="..."> </input>
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
      items: ["hello", "world", "yo"],
      str: "",
      users: this.$store.state.users
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

<style lang="scss">
$bgColor: rgb(30, 35, 44);
$btColor: rgb(58, 88, 145);
$bthColor: rgb(50, 29, 65);

@keyframes slideIn {
  from {
    transform: translateY(-50px);
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
  width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.container {
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
    font-weight: 500;
    animation: fadeIn 1s;
  }
  h2 {
    font-weight: 100;
    animation: fadeIn 2s;
  }
  button {
    background-color: $btColor;

    color: white;
    font-size: 200%;
    width: 300px;
    padding: 20px;
    border-radius: 10px;
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
  }
}
.about {
  @extend %frame;
}
.user {
  @extend %frame;
  min-height: 200px;
}
</style>

