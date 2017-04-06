<template>
    <transition name="info">
        <div v-if="showFlag">
            <div class="info">
                <div class="infoHeader">
                    <div @click="hide"
                         class="back"><span class="icon-times-outline"></span></div>
                    <div class="infoInfo">回答</div>
                    <div class="share"><span class="icon-flow-merge"></span></div>
                    <div @click="showInfoSet"
                         class="set"><span class="icon-th-list"></span></div>
                </div>
                <div class="infoTitle">{{info.title}}</div>
                <div class="infoUser">
                    <div class="userAvatar"><img :src="info.user.avatar" /></div>
                    <div class="userName">{{info.user.name}}</div>
                    <span class="userFollow">关注</span>
                </div>
                <div class="infoMain">
                    {{info.user.info}}
                    <div class="mainFooter">
                        <span class="time">发布于 {{info.user.time}}</span>
                        <span>著作权归作者所有</span>
                    </div>
                </div>
                <div class="infoFooter">
                    <div class="infoNum">{{info.love}}</div>
                    <div class="infoIcon">
                        <span class="icon-flag icon"></span>
                        <span class="i">没有帮助</span>
                    </div>
                    <div class="infoIcon">
                        <span class="icon-heart-outline icon"></span>
                        <span class="i">感谢</span>
                    </div>
                    <div class="infoIcon">
                        <span class="icon-star-outline icon"></span>
                        <span class="i">收藏</span>
                    </div>
                    <div class="infoIcon">
                        <span class="icon-message-typing icon"></span>
                        <span class="i">{{info.commit}}</span>
                    </div>
                </div>
            </div>
            <InfoSet ref="infoSet"></InfoSet>
        </div>
    </transition>
</template>

<script>

import InfoSet from '../infoSet/InfoSet'

export default {
    name: 'info',
    props: {
        info: {
            type: Object
        }
    },
    data() {
        return {
            showFlag: false,
        }
    },
    methods: {
        show() {
            this.showFlag = true;
        },
        hide() {
            this.showFlag = false;
        },
        showInfoSet() {
            this.$refs.infoSet.show();
        },
    },
    components: {
        InfoSet
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
  height: 100vh
  z-index: 31
  overflow: scroll
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
    min-height: 60px
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
   .infoMain
     box-sizing: border-box
     width: 100%
     padding: 35px 20px 0 20px
     margin-bottom: 70px    
     line-height: 2
     .mainFooter
       display: flex
       flex-direction: column
       text-align: right
       margin-top: 20px
       font-size: 12px
       color: #999    
   .infoFooter
     z-index: 32
     position: fixed
     bottom: 0
     left: 0
     width: 100%
     height: 60px
     background: #fff
     display: flex
     padding: 5px
     box-sizing: border-box
     justify-content: space-around  
     align-items: center
     border-top: 1px solid #d3d3d3
     .infoNum
       padding: 5px 10px
       border: 1px solid #999
       border-radius: 3px
       color: #999
     .infoIcon
       display: flex
       flex-direction: column
       align-items: center
       color: #999
       .i
         font-size: 12px
         margin-top: 5px
       .icon
         font-size: 20px  
</style>
