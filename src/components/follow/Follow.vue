<template>
    <div class="follow">
        <MinHeader type="关注"
                   path="/setting"></MinHeader>
        <div class="follow-wrapper">
            <div class="follow-item" v-for="(fol, index) in follows">
                <div class="follow-avatar">
                    <img :src="fol.avatar" />
                </div>
                <div class="follow-name">{{fol.name}}</div>
                <div class="follow-btn" @click="removeFollow(index)">
                   正在关注
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MinHeader from '../minHeader/MinHeader'
export default {
    name: 'follow',
    data() {
        return {
            follows: []
        }
    },
    created() {
        this.follows = this.$store.state.follows;
    },
    methods: {
        removeFollow(index) {
            this.$store.dispatch('removeFollow', index);
        }
    },
    components: {
        MinHeader
    }
}
</script>
<style lang="stylus">
.follow
  width: 100%
  .follow-wrapper 
    padding: 60px 0 50px 0
    display: flex
    flex-direction: column
    .follow-item
      width: 100%
      padding: 15px 20px;
      box-sizing: border-box
      display: flex
      align-items: center
      border-bottom: 1px solid #f0f2f7
      .follow-avatar
        width: 40px;
        height: 40px
        border-radius: 50%
        overflow: hidden
        margin-right: 20px
        img
          width: 100%
          height: 100%
      .follow-name
        font-weight: 700
        flex: 1
      .follow-btn
        padding: 10px;
        border-radius: 3px
        color: #fff
        background: #c3ccd9      
</style>