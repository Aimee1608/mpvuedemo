<template>
  <div class="counter-warp">
      <a @click="gotoGame('pages/index/main')"   class="home">去往首页</a>
    <ul class="container log-list">
      <li v-for="(log, index) in logs" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },
  data () {
    return {
      logs: []
    }
  },
  methods: {
      gotoGame (path) {
         this.reLaunchPageTo(this.router + path)
      }
 },
  created () {
    const logs = (this.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style lang="less" scoped>
.counter-warp {
  text-align: center;
  padding-top: 0;
}
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40/7.5vw;
}

.log-item {
  margin: 10/7.5vw;
}
.home {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
