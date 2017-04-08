<template>
  <div class="message">
    <v-header inner="私信"></v-header>
    <div class="msgMain">
      <div v-for="msg in message"
           class="msgItem">
        <div class="msgAvatar">
          <img :src="msg.user.avatar" />
        </div>
        <div class="msgRight">
          <div class="msgHeader">
            <h1 class="msgName">{{msg.user.name}}</h1>
            <span class="msgTime">{{msg.user.time}}</span>
          </div>
          <p class="msgSummary">{{msg.user.summary}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '../header/Header'

export default {
  name: 'message',
  data() {
    return {
      message: {}
    }
  },
  created() {
    this.$http.get('/api/message').then((response) => {
      response = response.body
      if (response.errno === 0) {
        this.message = response.message;
      }
    })
  },
  components: {
    'v-header': Header
  }
}
</script>

<style lang="stylus">
.message
  .msgMain
    box-sizing: border-box
    padding: 60px 20px 0 20px
    border-bottom: 1px solid #999
    width: 100%
    display: flex
    flex-direction: column
    .msgItem
      display: flex
      align-items: center
      padding: 15px 0
      border-top: 1px solid #dedede
      .msgAvatar
        width: 50px
        height: 50px
        border-radius: 50%
        overflow: hidden
        margin-right: 10px
        img
          width: 100%
      .msgRight
        display: flex
        flex-direction: column
        .msgHeader
          display: flex
          justify-content: space-between
          align-items: center
          .msgName
            font-size: 18px
            font-weight: 500
          .msgTime
            font-size: 14px
            color: #999
        .msgSummary
          font-size: 14px
          margin-top: 5px        
</style>
