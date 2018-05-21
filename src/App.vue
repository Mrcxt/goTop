<template>
  <div id="app">
    <div v-for="item in 20" :key="item.id">
      <p>{{ item }}</p>
      <br>
    </div>
    <!--  -->
    <go-top :height="200" :right="30" :bottom="30" :duration="1000" @on-click="clg"></go-top>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 1
    };
  },
  components: {},
  methods: {
    clg() {
      console.log(`第${this.count++}次点击`);
    }
  }
};
</script>

<style lang="less">
html {
  background: url("./assets/backgroud1.png") no-repeat center center;
  background-color: rgba(0, 0, 0, 0.08);
  background-size: cover;
}
#app {
  text-align: center;
}
</style>

