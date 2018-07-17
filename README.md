# mpvue demo

> A Mpvue project

## Build Setup

``` bash
# 安装依赖（注意查看package.json里面模块的安装版本号）
npm install

# 小程序运行
npm run dev

# H5运行
npm run devH5

# 小程序打包（打包到dist目录)
npm run build

# H5打包（打包到distH5目录)
npm run buildH5

```


博客详细说明 https://blog.csdn.net/Aimee1608/article/details/81084553


## 开始
这个项目是一个mpvue 的demo, 没有具体的业务实现方法，只有简单的页面切换，还有常用的一些方法封装，总体提供分开打包开发的思路
>github源码 => https://github.com/Aimee1608/mpvuedemo

需要看详细版有项目内容的，可以看这篇文章，有详细说明 https://blog.csdn.net/aimee1608/article/details/80757077
## 目录结构

```bash
.
├── README.md
├── build                       小程序运行打包配置文件
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── buildH5                    H5运行打包配置文件
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.baseH5.conf.js
│   ├── webpack.devH5.conf.js
│   └── webpack.prodH5.conf.js
├── config                   小程序运行打包配置文件         
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── configH5                H5运行打包配置文件
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── dist                    小程序打包生成的文件目录
│   ├── app.js
│   ├── app.json
│   ├── app.wxss
│   ├── components
│   │   ├── card$79c1b934.wxml
│   │   ├── counter$6c3d87bf.wxml
│   │   ├── index$622cddd6.wxml
│   │   ├── logs$31942962.wxml
│   │   └── slots.wxml
│   ├── copy-asset
│   │   └── assets
│   │       └── logo.png
│   ├── pages
│   │   ├── counter
│   │   │   ├── main.js
│   │   │   ├── main.wxml
│   │   │   └── main.wxss
│   │   ├── index
│   │   │   ├── main.js
│   │   │   ├── main.wxml
│   │   │   └── main.wxss
│   │   └── logs
│   │       ├── main.js
│   │       ├── main.json
│   │       ├── main.wxml
│   │       └── main.wxss
│   └── static
│       ├── css
│       │   ├── app.wxss
│       │   ├── pages
│       │   │   ├── counter
│       │   │   │   └── main.wxss
│       │   │   ├── index
│       │   │   │   └── main.wxss
│       │   │   └── logs
│       │   │       └── main.wxss
│       │   └── vendor.wxss
│       ├── img
│       │   └── girl.png
│       └── js
│           ├── app.js
│           ├── manifest.js
│           ├── pages
│           │   ├── counter
│           │   │   └── main.js
│           │   ├── index
│           │   │   └── main.js
│           │   └── logs
│           │       └── main.js
│           └── vendor.js
├── distH5                          H5打包生成的文件目录
│   ├── index.html
│   └── static
│       ├── css
│       │   └── app.css
│       ├── img
│       │   ├── girl.png
│       │   └── logo.png
│       └── js
│           ├── app.js
│           ├── manifest.js
│           └── vendor.js
├── index.html                     入口index.html 页面
├── package-lock.json
├── package.json                   安装配置文件
├── project.config.json
├── src                             
│   ├── App.vue                     小程序入口vue
│   ├── AppH5.vue                   H5入口vue
│   ├── api                         小程序和H5分别封装的方法
│   │   ├── httpService.js
│   │   └── wxService.js
│   ├── assets                     静态资源文件
│   │   └── logo.png
│   ├── components                  组件
│   │   └── card.vue
│   ├── main.js                     小程序入口js
│   ├── mainH5.js                   H5入口js
│   ├── pages                       页面内容
│   │   ├── counter
│   │   │   ├── index.vue
│   │   │   └── main.js
│   │   ├── index
│   │   │   ├── index.vue
│   │   │   └── main.js
│   │   └── logs
│   │       ├── index.vue
│   │       └── main.js
│   ├── router                      H5路由
│   │   └── index.js
│   ├── store                       vuex存储
│   │   └── index.js
│   └── utils                       js封装方法
│       └── index.js
└── static                          静态资源文件
    └── img
        └── girl.png
```

## 简易说明
### 路由跳转

```bash
<template>
  <div class="container">
      <!-- 图片引用的两种方式 -->
      <img class="girl" :src="imgSrc +'static/img/girl.png'" alt="">
      <img class="logo" src="../../assets/logo.png" alt="">
    <card :text="motto"></card>
    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <!-- 路由跳转 -->
    <a @click="gotoGame('pages/counter/main')" class="counter">去往Vuex示例页面</a>
    <a @click="gotoGame('pages/logs/main')" class="counter">去往logs页面</a>
  </div>
</template>

<script>
// 组件引用
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World'
    }
  },
  components: {
    card
  },
  methods: {
     gotoGame (path) {
        this.reLaunchPageTo(this.router + path)
     }
  }
}
</script>
```

### 分别封装方法

> H5 mainH5.js方法
```bash
Vue.mixin({
  data () {
    return {
      service: '', // 服务
      router: '/', // 路由路径
      imgSrc: '' // 图片路径
    }
  },
  methods: {
      newroot () {
          return  this.$route
      },
      navigatePageTo (url) {
          this.$router.push(url)
      },
      reLaunchPageTo (url) {
          this.$router.replace(url)
      },
      setStorageSync (name, data) {
          sessionStorage.setItem(name, JSON.stringify(data))
      },
      getStorageSync (name) {
          return JSON.parse(sessionStorage.getItem(name))
      }
  },
  created () {
      console.log('chrome')
      this.service = httpService
  }
})
```
> 小程序main.js

```bash
Vue.mixin({
  data() {
    return {
      service: '',
      router: '/',
      imgSrc: '/'
    }
  },
  methods: {
      newroot () {
          return this.$root.$mp
      },
      navigatePageTo (url) {
          wx.navigateTo({url: url})
      },
      reLaunchPageTo (url) {
          wx.reLaunch({url: url})
      },
      setStorageSync (name, data) {
          wx.setStorageSync(name, data)
      },
      getStorageSync (name) {
          return wx.getStorageSync(name)
      }
  },
  created() {
      // console.log('wx')
      this.service = wxService
  }
})
```

### vuex 数据存储
>小程序store 直接挂在 Vue原型上

```bash
Vue.prototype.$store = store
```

>H5vue 还是和之前一样

```bash
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
```
