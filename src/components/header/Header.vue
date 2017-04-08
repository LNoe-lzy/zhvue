<template>
    <div class="headers">
        <div class="headInfo">{{inner}}</div>
    </div>
</template>
<script>
export default {
    name: "header",
    props: {
        inner: {
            type: String
        }
    }
}
</script>
<style lang="stylus">
.headers
    height: 60px
    width: 100%
    position: fixed
    top: 0
    left: 0
    background: #0f88eb
    box-sizing: border-box
    padding: 15px
    font-size: 20px
    color: #fff
    display: flex
    align-items: center
</style>