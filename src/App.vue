<template>
  <div id="app">
    <div class="title">
      <p>向下滑动</p>
      <p>↓</p>
    </div>
    <div v-for="item in 20" :key="item.id">
      <br>
      <br>
      <br>
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
  background: url("http://oz2tkq0zj.bkt.clouddn.com/17-11-9/19584406.jpg")
    repeat-y top center;
  background-color: rgba(0, 0, 0, 0.08);
  background-size: 100% auto;
}
#app {
  color: #fff;
  .title {
    text-align: center;
    p {
      font-size: 30px;
    }
  }
}
</style>

