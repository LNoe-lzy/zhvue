<template>
  <div>
    <div class="article">
      <div class="header">
        <input type="text"
               placeholder="搜索" />
        <label><span class="icon-search"></span></label>
        <div class="live">
          <span class="icon-power"></span>
        </div>
      </div>
      <div class="wrapper">
        <div class="item"
             v-for="(col, index) in collections">
          <div class="top">
            <div class="avatar"><img :src="col.user.avatar"></div>
            <div class="topic">{{col.topic}}</div>
          </div>
          <h1 class="title">{{col.title}}</h1>
          <p @click="selectArticle(col)" class="summary">{{col.summary}}</p>
          <div class="bottom">
            <span>{{col.love}} 赞同</span> • <span>{{col.commit}} 评论</span> • <span>关注问题</span>
          </div>
        </div>
      </div>
    </div>
    <Info :info="selectedArticle" ref="info"></Info>
  </div>
</template>
<script>
import Info from '../Info/Info'
export default {
  name: 'article',
  data() {
    return {
      collections: [],
      selectedArticle: {}
    }
  },
  created () {
      this.collections = this.$store.state.collections;
      console.log(this.$store.state.collections);
  },
  methods: {
    selectArticle(article) {
      this.selectedArticle = article;
      // 显示info组件
      this.$refs.info.show();
    }
  },
  components: {
    Info
  }
}
</script>

<style lang="stylus">
::-webkit-input-placeholder
  color: #fff
:-moz-placeholder
  color: #fff
::-moz-placeholder
  color: #fff
:-ms-input-placeholder 
  color: #fff
.article
   width: 100%
   .header
     width: 100%
     box-sizing: border-box
     height: 60px
     padding: 10px
     background: #0f88eb
     display: flex
     position: fixed
     top: 0
     left: 0
     label
       width: 40px
       height: 40px
       position: absolute
       left: 10px
       top: 10px
       font-size: 20px
       color: #fff
       display: flex
       justify-content: center
       align-items: center
     input
       box-sizing: border-box
       height: 40px
       width: 100%
       padding-left: 40px
       background: rgba(108, 161, 231, 0.6)
       color: #fff
       outline: none
       border-radius: 3px
     .live
       width: 40px
       height: 40px
       font-size: 20px
       color: #fff
       display: flex
       justify-content: center
       align-items: center
       margin-left: 10px  
   .wrapper
     box-sizing: border-box
     padding: 70px 0 50px 0
     min-height: 100vh
     background: rgb(245, 245, 245)
     .item
       box-sizing: border-box
       width: 100%
       padding: 15px
       margin-bottom: 10px
       background: #fff
       box-shadow: 0px 0px 3px #aaaaaa
       display: flex
       flex-direction: column
       .top
         display: flex
         align-items: center
         .avatar
           width: 30px
           height: 30px
           border-radius: 50%
           overflow: hidden  
           img
             width: 100%
             height: 100%
         .topic
             color: #999
             margin-left: 10px  
       .title
         font-size: 18px
         font-weight: 700
         margin: 10px 0
       .summary
         line-height: 24px
         color: #000
       .bottom
         color: #999
         font-weight: 100
         margin-top: 10px    
</style>
