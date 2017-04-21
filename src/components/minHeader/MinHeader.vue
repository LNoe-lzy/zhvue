<template>
    <div class="min-header">
        <router-link :to="path"
                     class="min-back"><span class="icon-times-outline"></span></router-link>
        <div class="min-title">{{type}}</div>
    </div>
</template>
<script>
export default {
    name: 'minHeader',
    props: {
        // 跳转的路径
        path: {
            type: String
        },
        // 类型名
        type: {
            type: String
        }
    }
}
</script>

<style lang="stylus">
.min-header
     width: 100%
     box-sizing: border-box
     height: 60px
     padding: 15px
     background: #0f88eb
     display: flex
     position: fixed
     top: 0
     left: 0
     align-items: center
     color: #fff
     font-size: 20px
     .min-back
       color: #fff
     .min-title
       margin-left: 15px
</style>