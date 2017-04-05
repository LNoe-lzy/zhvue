<template>
    <transition name="info">
        <div v-if="showFlag" class="info">
            <div class="infoHeader">
                <div  @click="hide" class="back"><span class="icon-times-outline"></span></div>
                <div class="infoInfo">回答</div>
                <div class="share"><span class="icon-flow-merge"></span></div>
                <div class="set"><span class="icon-th-list"></span></div>
            </div>
            <div class="infoTitle">{{info.title}}</div>
            <div class="infoUser">
                <div class="userAvatar"><img :src="info.user.avatar" /></div>
                <div class="userName">{{info.user.name}}</div>
                <span class="userFollow">关注</span>
            </div>
            <div class="infoMain"></div>
            <div class="infoFooter"></div>
        </div>
    </transition>
</template>

<script>

export default {
    name: 'info',
    props: {
        info: {
            type: Object
        }
    },
    data() {
        return {
            showFlag: false
        }
    },
    methods: {
        show() {
            this.showFlag = true;
        },
        hide() {
            this.showFlag = false;
        }
    }
}
</script>

<style lang="stylus">
.info-enter-active, .info-leave-active {
  transition: opacity .5s
}
.info-enter, .info-leave-active {
  opacity: 0
}
.info
  position: fixed
  left: 0
  top: 0
  background: #fff
  width: 100%
  .infoHeader
    height: 60px
    width: 100%
    display: flex
    box-sizing: border-box
    padding: 15px
    font-size: 20px
    background:  #0f88eb
    color: #fff
    align-items: center
    .infoInfo
      margin-left: 15px
      width: 100%
    .back, .share, .set 
      display: flex
      align-items: center
      justify-content: center
      width 20px
      height: 20px
      span
        width: 100%
        height: 100%
    .share
      margin-right: 20px    
  .infoTitle
    height: 60px
    width: 100%
    background:  #0f88eb    
    padding: 15px
    font-size: 20px
    box-sizing: border-box
    color: #fff
    font-weight: 500
    line-height: 30px
  .infoUser
    display: flex
    align-items: center
    height: 60px
    padding: 15px  
    box-sizing: border-box
    border-bottom: 1px solid #d3d3d3
    .userAvatar
      width: 30px
      height: 30px
      overflow: hidden
      border-radius: 50%
      margin-right: 15px
      img
        width: 100%
    .userName
      flex: 1
    .userFollow
      display: block
      box-sizing: border-box
      padding: 10px 15px
      border-radius: 5px
      border: solid 1px #0f88eb      
</style>
