<template>
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
      <div class="item" v-for="arc in article">
        <div class="top">
          <div class="avatar"><img :src="arc.avatar"></div>
          <div class="topic">{{arc.topic}}</div>
        </div>
        <h1 class="title">{{arc.title}}</h1>
        <p class="info">{{arc.summary}}</p>
        <div class="bottom">
          <span>{{arc.love}} 赞同</span> • <span>{{arc.commit}} 评论</span> • <span>关注问题</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'article',
  data() {
    return {
      article: []
    }
  },
  created() {
    this.$http.get('/api/article').then((response) => {
      response = response.body;
      if (response.errno === 0) {
        this.article = response.article;
      }
    })
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
       height: 200px
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
       .info
         line-height: 24px
       .bottom
         color: #999
         font-weight: 100
         margin-top: 10px    
</style>
