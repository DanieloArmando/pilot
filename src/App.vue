<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{name: 'users'}">Users</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
$bgColor: rgb(30, 35, 44);

body {
  background-color: $bgColor;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  background-color: white;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

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
      background-color: $bthColor;
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
}
.staff {
  @extend %frame;
  min-height: 200px;
}
</style>
