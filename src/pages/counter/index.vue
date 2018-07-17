<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button class="btn" @click="increment">+</button>
      <button class="btn" @click="decrement">-</button>
    </p>

    <a @click="gotoGame('pages/index/main')"   class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex

export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
      gotoGame (path) {
         this.reLaunchPageTo(this.router + path)
      },
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style lang="less">
.counter-warp {
  text-align: center;
  padding-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.btn{
    width: 100%;
    position:relative;
    display:block;
    padding-left:14px;
    padding-right:14px;
    box-sizing:border-box;
    font-size:18px;
    text-align:center;
    text-decoration:none;
    line-height:2.55555556;
    border-radius:5px;
    overflow:hidden;
    color:#000000;
    background-color:#F8F8F8;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
  -webkit-appearance:none;
  outline: none;
}
</style>
