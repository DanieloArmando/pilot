<template>
<div>
  <div class="about" v-for="(item,index) in items">
    <h1> {{index}}</h1>
    <h2>{{item}}</h2>
    <button>Add</button>
  </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      items: ["hello", "world", "yo"]
    };
  }
};
</script>

<style lang="scss">
$bgColor: rgb(30, 35, 44);
$btColor: rgb(58, 88, 145);
.about {
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
    font-weight: 200%;
  }
}
</style>

