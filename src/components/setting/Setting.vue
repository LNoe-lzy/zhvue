<template>
  <div class="setting">
    <v-header inner="更多"></v-header>
    <div class="setMain">
      <div class="userInfo">
        <div class="userAvatar">
          <img :src="setting.avatar" />
        </div>
        <div class="userInfoRight">
          <span class="userName">{{setting.name}}</span>
          <p class="userEdit">查看或编辑个人主页</p>
        </div>
      </div>

      <div class="setPanel">
        <router-link to="/follow" class="setPane">
          <div class="paneicon"><span class="icon-visibility"></span></div>
          <span class="paneinfo">我的关注</span>
        </router-link>
        <router-link to="/collections" class="setPane">
          <div class="paneicon"><span class="icon-star"></span></div>
          <span class="paneinfo">我的收藏</span>
        </router-link>
        <div class="setPane">
          <div class="paneicon"><span class="icon-save"></span></div>
          <span class="paneinfo">我的草稿</span>
        </div>
        <div class="setPane">
          <div class="paneicon"><span class="icon-web"></span></div>
          <span class="paneinfo">最近浏览</span>
        </div>
        <div class="setPane">
          <div class="paneicon"><span class="icon-import_contacts"></span></div>
          <span class="paneinfo">我的礼卷</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Header from '../header/Header'
export default {
  name: 'setting',
  data () {
    return {
      setting: {}
    }
  },
  components: {
    "v-header": Header
  },
  created () {
    this.$http.get('/api/setting').then((response) => {
      response = response.body;
      if (response.errno === 0) {
        this.setting = response.setting
      }
    })
  }
}
</script>

<style lang="stylus">
.setting
  background: rgb(245, 245, 245)
  min-height: 100vh
  .setMain
    box-sizing: border-box
    padding-top: 60px
    .userInfo
      background: #fff
      margin-top: 10px
      box-shadow: 0 0 3px #999
      display: flex
      align-items: center
      padding: 20px
      .userAvatar
        width: 50px
        height: 50px
        border-radius: 50%
        overflow: hidden
        margin-right: 20px
        img
          width: 100%
      .userInfoRight
        .userName
          display: block
          margin-bottom: 10px
        .userEdit
          color: #999
    .setPanel
      width: 100%
      margin-top: 10px
      padding: 0 15px
      box-sizing: border-box
      background: #fff
      box-shadow: 0 0 3px #999
      .setPane
        padding: 15px 0
        display: flex
        border-bottom: 1px solid #d3d3d3   
        align-items: center
        .paneicon
          height: 20px
          width: 20px
          margin-right: 15px
          span
            font-size: 20px
            color: #999
        .paneinfo
          display: block
          color: #999             
</style>
