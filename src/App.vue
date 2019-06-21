<script>
export default {
  globalConfig: {
    usingComponents: {
      'van-tag': 'vant-weapp/dist/tag/index'
    }
  },
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // eslint-disable-next-line
    console.log('app created and cache logs by setStorageSync')
  }
}
</script>
<style lang="stylus">
// 全局样式
</style>
