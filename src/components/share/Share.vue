<template>
    <transition name="share">
        <div class="shares" v-show="shareFlag">
            <div class="shareTitle">
                <span>分享到..</span>
                <span @click="hide" class="icon-times-outline"></span>
            </div>
            <div class="shareMain">
                <div class="shareItem">
                    <span class="icon-facebook2 icon"></span>
                    <span class="itemInfo">facebook</span>
                </div>
                <div class="shareItem">
                    <span class="icon-twitter icon"></span>
                    <span class="itemInfo">twitter</span>
                </div>
                <div class="shareItem">
                    <span class="icon-github icon"></span>
                    <span class="itemInfo">github</span>
                </div>
                <div class="shareItem">
                    <span class="icon-tumblr2 icon"></span>
                    <span class="itemInfo">tumblr</span>
                </div>
                <div class="shareItem">
                    <span class="icon-linkedin2 icon"></span>
                    <span class="itemInfo">linkedin</span>
                </div>
                <div class="shareItem">
                    <span class="icon-google-plus3 icon"></span>
                    <span class="itemInfo">google</span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
    name: 'share',
    data () {
        return {
            shareFlag: false
        }
    },
    methods: {
        show() {
            this.shareFlag = true;
        },
        hide() {
            this.shareFlag = false;
        },
    },
}
</script>

<style lang="stylus">
.share-enter-active, .share-leave-active {
  transition: opacity .5s
}
.share-enter, .share-leave-active {
  opacity: 0
}
.shares
  z-index: 32
  position: fixed
  bottom: 0
  left: 0
  box-sizing: border-box
  width: 100%
  padding: 20px
  background: #fff
  box-shadow: 0 0 3px #999
  display: flex
  flex-direction: column
  .shareTitle
    margin-bottom: 20px
    display: flex
    justify-content: space-between
  .shareMain
    display: flex
    justify-content: space-around
    flex-wrap: wrap
    .shareItem
      display: flex
      flex-direction: column
      justify-content: center
      text-align: center
      width: 80px
      margin: 10px
      .icon
        font-size: 30px
        margin-bottom: 5px
        color: #0f88eb
</style>
