# vue 组件 -- 返回顶部组件

## 概述

一款快捷返回顶部的 vue 插件，放置在页面右下角位置。

## 演示

[DEMO](https://mrcxt.github.io/goTop/dist/index.html)

## 食用方法

### 1.下载安装

```js
npm install vue-gotop --save
```

### 2.注册组件

首先需要注册组件。

```js
import Vue from "vue";
import goTop from "vue-gotop";

Vue.use(goTop);
```

### 3.使用组件

接下来就可以使用啦

**基础用法**

默认位置距离页面右部和底部 30px，滚动至距顶端 400px 时显示。

```html
<template>
  <go-top></go-top>
</template>
<script>
    export default {

    }
</script>
```

**自定义用法**

自定义了位置距离底部 200px，距离右侧 200px，滚动至距顶端 100px 时显示。点击组件时，触发`clg`方法，并且在 2s 内返回顶部。

```html
<style scoped>
    .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>
<template>
    <go-top :height="100" :bottom="200" :right="200" :duration="2000" @on-click="clg">
        <div class="top">返回顶端</div>
    </go-top>
</template>
<script>
    export default {
      methods: {
        clg() {
          console.log("object");
        }
      }
    }
</script>
```

## API

### props

| 属性       | 说明                                    | 类型   | 默认值 |
| ---------- | --------------------------------------- | ------ | ------ |
| `height`   | 页面滚动高度达到该值时才显示`goTop`组件 | Number | 400    |
| `bottom`   | 组件距离底部的距离                      | Number | 30     |
| `right`    | 组件距离右部的距离                      | Number | 30     |
| `duration` | 滚动动画持续时间，单位 毫秒             | Number | 1000   |

### events

| 事件名     | 说明           | 返回值 |
| ---------- | -------------- | ------ |
| `on-click` | 点击按钮时触发 | 无     |
