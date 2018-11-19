<template>
<div>

  <div class="about">
    <h1>New User</h1>
    <input v-on:enter="addUser" v-model="str" placerholder="..."> </input>
    <button v-on:click="addUser">Add</button>
  </div>
  <div class="user" v-for="(user,index) in users">
    <h1> {{user}}</h1>
    <h2>{{user}}</h2>
  </div>
  <div class="about" v-for="(item,index) in items">
    <h1> {{item}}</h1>
    <h2>{{item}}</h2>
        <button>{{index}}</button>

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
%frame {
  background-color: $bgColor;

  color: white;
  min-height: 400px;
  padding: 20px;

  h1 {
    font-weight: 500;
  }
  h2 {
    font-weight: 100;
  }
  button {
    background-color: $btColor;
    color: white;
    font-size: 200%;
    width: 400px;
    padding: 20px;
    border-radius: 10px;
  }
  input {
    width: 300px;
    height: 20px;
    text-align: center;
    font-size: 20px;
    padding: 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
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

