<template>
    <transition name="infoset">
        <div class="infoSet" v-if="infoSetShow">
            <div class="infoSetItem">
                <span>举报回答</span>
                <span @click="hide" class="icon-times-outline"></span>
            </div>
            <span class="infoSetItem">字体大小</span>
            <div class="infoSetItem">
                <span>夜间模式</span>
                <input type="checkbox" />
            </div>
            <span class="infoSetItem">使用匿名身份</span>
        </div>
    </transition>
</template>

<script>

export default {
    name: 'infoSet',
    data () {
        return {
            infoSetShow: false
        }
    },
    methods: {
        show () {
            this.infoSetShow = true;
        },
        hide () {
            this.infoSetShow = false;
        }
    }
}
</script>

<style lang="stylus">
.infoset-enter-active, .infoset-leave-active {
  transition: opacity .5s
}
.infoset-enter, .infoset-leave-active {
  opacity: 0
}
.infoSet
  width: 50%
  position: fixed
  right: 10px
  top: 5px
  z-index: 32
  display: flex
  flex-direction: column
  box-sizing: border-box
  padding: 0 15px
  background: #fff
  border-radius: 3px
  box-shadow: 0 0 3px #999
  .infoSetItem
    margin: 15px 0
    display: flex
    justify-content: space-between
    
</style>
