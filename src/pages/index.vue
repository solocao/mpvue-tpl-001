<template>
  <div @click="clickHandle">
    <div class="userinfo" @click="bindViewTap">
      <open-data type="userAvatarUrl" class="userinfo-avatar"></open-data>
      <open-data type="userGender" lang="zh_CN"></open-data>
      <div class="userinfo-nickname">
        <open-data type="userNickName" open-gid="xxxxxx" background-size="cover"></open-data>
      </div>
    </div>
    <button plain='true' open-type="getUserInfo" lang="zh_CN" @getuserinfo='onGotUserInfo'>获取用户信息</button>
    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

    <a href="/pages/counter" class="counter">去往Vuex示例页面</a>
    <a @click="goCounter" class="counter">去往Vuex示例页面 router</a>

    <p>
      <van-button type="primary" @click="goPackageA"></van-button>
    </p>

  </div>
</template>

<script>
import card from '@/components/card'
export default {
  components: {
    card
  },
  data () {
    return {
      motto: 'Hello world',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  methods: {
    bindViewTap () {
      const url = '../logs/index'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    onGotUserInfo (e) {
      console.log(e.mp.detail.userInfo)
      console.log(e.mp)
      if (e.mp.detail.rawData) {
        // 用户按了允许授权按钮
        console.log('用户按了允许授权按钮')
      } else {
        // 用户按了拒绝按钮
        console.log('用户按了拒绝按钮')
      }
    },
    getUserInfo () {
      wx.getSetting({
        success: (res) => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: (res) => {
                console.log(res.userInfo)
                // 用户已经授权过s
                console.log('用户已经授权过')
              }
            })
          } else {
            // 没有授权过的用户，跳转到自己写的授权提示页面
            // wx.navigateTo({
            //   url: '/pages/getUserInfo/main'
            // })
            console.log('用户还未授权过')
          }
        }
      })
      // 调用登录接口
      // wx.login({
      //   success: () => {
      //     wx.getUserInfo({
      //       success: (res) => {
      //         console.log(res)
      //         this.userInfo = res.userInfo
      //       }
      //     })
      //   }
      // })
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    goCounter () {
      console.log('goCounter')
      this.$router.push({ path: '/pages/counter' })
    }
  },
  created () {
    // let app = getApp()
  },
  mounted () {

  }

}
</script>

<style scoped>
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
  .userinfo-nickname {
    color: #aaa;
  }
  .usermotto {
    margin-top: 50px;
  }
  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }
  .counter {
    display: inline-block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }
</style>