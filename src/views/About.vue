<template>
<div>
  <div class="container">
    
    <div class="blog" v-for="(blog,index) in blogs">
      <div class="border">
        <h3>{{blog.text}}</h3>
      </div>
      <img :src="blog.img"/>
            <div class="border-bottom">
        <h3>{{blog.text}}</h3>
      </div>
    </div>
    
  <div class="post">
    <h1>Blog</h1>
    <input v-model="blog.text" placeholder="Title"/>
    <input v-model="blog.img" placeholder="IMG URL"/>
    <div class="col-100">
    <button v-on:click="postBlog">Post</button>
    </div>
  </div>

    <div class="blog">
      <div class="border">
        <h3>{{blog.text}}</h3>
      </div>
      <img :src="blog.img"/>
          <div class="border-bottom">
            <h3>{{blog.text}}</h3>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      staff: this.$store.state.staff,
      blog: {
        id: 0,
        text: "",
        img: ""
      },
      users: this.$store.state.users,
      blogs: this.$store.state.blogs
    };
  },
  methods: {
    addUser() {
      console.log("Adding User," + this.str);
      this.$store.commit("addUser", this.str);
      console.log(this.$store.state.users);
    },
    postBlog() {
      this.blog.id = this.blogs.length;
      let temp = {
        id: this.blog.id,
        text: this.blog.text,
        img: this.blog.img
      };
      this.$store.commit("postBlog", temp);
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
@import url("https://fonts.googleapis.com/css?family=Crimson+Text|Dosis:200|Quicksand:300");
body {
  background-color: $bgColor;
  //
  font-family: "Times New Roman", Times, serif;
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
  /* min-height: 400px; */
  padding: 20px;
  font-family: "Quicksand", sans-serif;
  margin-left: auto;
  margin-right: auto;
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
    width: 100%;
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
    width: 100%;
    height: 20px;
    text-align: center;
    font-size: 20px;
    padding: 20px;
    border: 0px;
    color: black;
    &:hover {
      background-color: cornflowerblue;
      transition: 1s;
    }
    &:first-child {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
}
.post {
  @extend %frame;
  width: 500px;
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

  img {
    width: 100%;
    display: block;
    margin-top: -10px;
    margin-bottom: -20px;
  }
  .border {
    background-color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    h3 {
      padding: 10px;
      font-weight: 300;
      color: rgb(58, 62, 70);
      font-family: "Crimson Text", serif;
    }
  }
  .border-bottom {
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    h3 {
      padding: 10px;
      color: rgb(58, 62, 70);
      font-family: "Crimson Text", serif;
    }
  }
}
</style>

