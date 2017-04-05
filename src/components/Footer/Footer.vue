<template>
    <div class="footer">
        <div class="item">
            <router-link to="/article"><span class="icon-file-text"></span></router-link>
        </div>
        <div class="item">
            <router-link to="/find"><span class="icon-chrome"></span></router-link>
        </div>
        <div class="item">
            <router-link to="/remind"><span class="icon-rocket"></span></router-link>
        </div>
        <div class="item">
            <router-link to="/message"><span class="icon-bubbles2"></span></router-link>
        </div>
        <div class="item">
            <router-link to="/setting"><span class="icon-menu"></span></router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'footer'
}
</script>
<style lang="stylus">
.footer
  height: 50
  width: 100%
  display: flex
  justify-content: space-around
  align-items: center
  border-top: 1px solid #ededed
  position: fixed
  bottom: 0
  left: 0
  background: #fff
  z-index: 30
  .item
    height: 50px;
    width: 50px;
    .router-link-active
      color: #1296db
    a
      display: flex
      width: 100%
      height: 100%
      justify-content: center
      align-items: center
      span
        font-size: 24px
        text-align: center
    
</style>