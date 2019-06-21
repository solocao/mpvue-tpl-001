<template lang="pug">
  .container(@click="clickHandle('test click', $event)")
    .userinfo(@click="bindViewTap")
    img.userinfo-avatar(v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover")
    .userinfo-nickname
      Card(text="userInfo.nickName")
    van-tag 标签
    van-tag(type="danger") 标签
    van-tag(type="primary") 标签
    van-tag(type="success") 标签
    form.form-container
      input(type="text" class="form-control" v-model="motto" placeholder="v-model")
      input(type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy")
    a.counter(href="/pages/counter") 去往Vuex示例页面
    a.counter(href="/logs/index") 去往logs页面
</template>
<script>
import Card from '@/components/card'

export default {
  mpType: 'page',
  components: { Card },
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  },
  methods: {
    bindViewTap () {
      const url = '/logs/index'
      this.$router.push(url)
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      // eslint-disable-next-line
      console.log('clickHandle:', msg, ev)
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  height 100%
  display flex
  flex-direction column
  align-items center
  justify-content space-between
  padding 100px 0
  box-sizing border-box
.userinfo
  display flex
  flex-direction column
  align-items center
.userinfo-avatar
  width 128px
  height 128px
  margin 20px
  border-radius 50%
.userinfo-nickname
  color #aaa
.form-control
  display block
  padding 0 12px
  margin-bottom 5px
  border 1px solid #ccc
.counter
  display inline-block
  margin 10px auto
  padding 5px 10px
  color blue
  border 1px solid blue
</style>
