<template>
  <div id="app">
    <div class="title">
      <p>向下滑动</p>
      <p>↓</p>
    </div>
    <!-- 默认样式 -->
    <go-top></go-top>
    <!-- 自定义样式 -->
    <go-top :height="500" :right="0" :bottom="150" :duration="1000" @on-click="clg">
      <button class="button">
        我是自定义的按钮
      </button>
    </go-top>
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
  background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
}
#app {
  color: #fff;
  height: 300vh;
  .title {
    text-align: center;
    p {
      font-size: 30px;
    }
  }
  .button {
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 12px 20px;
    outline: 0;
    border: 1px solid #dcdfe6;
    border-color: #409eff;
    border-radius: 100000px;
    background: #fff;
    background-color: #409eff;
    color: #606266;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    font-size: 14px;
    line-height: 1;
    cursor: pointer;
    // -webkit-transition: 0.1s;
    // transition: 0.1s;

    -webkit-appearance: none;
  }
}
</style>

