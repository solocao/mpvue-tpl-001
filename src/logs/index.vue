<template lang="pug">
  div
    ul.log-list
      li.log-item(v-for="(log, index) in logs" :class="{ red: aa }" :key="index")
        Card(:text="`${index + 1}.log`")
</template>
<script>
import { formatTime } from '@/utils/index'
import Card from '@/components/card'

export default {
  config: {
    navigationBarTitleText: '查看启动日志'
  },
  components: { Card },
  data () {
    return {
      logs: []
    }
  },
  created () {
    const logs = wx.getStorageSync('logs') || []
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>
<style lang="stylus" scoped>
.log-list
  display flex
  flex-direction column
  padding 20px
.log-item
  margin 5px
</style>
