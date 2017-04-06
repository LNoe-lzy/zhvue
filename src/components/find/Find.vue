<template>
  <div>
    <div class="find">
      <div class="findHeader">
        <div class="headInfo">发现</div>
      </div>
      <div class="findNav">
        <div class="navItem">
          <div class="icon blue">
            <span class="icon-poll"></span>
          </div>
          <span class="iconText">专栏</span>
        </div>
        <div class="navItem">
          <div class="icon yellow">
            <span class="icon-audiotrack"></span>
          </div>
          <span class="iconText">Live</span>
        </div>
        <div class="navItem">
          <div class="icon green">
            <span class="icon-developer_board"></span>
          </div>
          <span class="iconText">书店</span>
        </div>
        <div class="navItem">
          <div class="icon orange">
            <span class="icon-star"></span>
          </div>
          <span class="iconText">收藏</span>
        </div>
        <div class="navItem">
          <div class="icon blue">
            <span class="icon-toys"></span>
          </div>
          <span class="iconText">圆桌</span>
        </div>
      </div>
  
      <!--热门资讯-->
      <div class="hot">
        <div class="title">
          <span class="top">热门资讯</span>
          <span class="bottom">72小时热门资讯</span>
        </div>
        <div class="item"
             v-for="hot in find.hotInfomation">
          <h1 class="title">{{hot.title}}</h1>
          <p @click="selectInfo(hot)" class="summary">{{hot.summary}}</p>
          <div class="bottom">
            <span>{{hot.look}} 浏览</span> • <span>{{hot.love}} 赞</span> • <span>{{hot.commit}} 评论</span>
          </div>
        </div>
        <div class="lookMore">查看更多热门资讯</div>
      </div>
  
      <!--热门内容-->
      <div class="hot">
        <div class="title">
          <span class="top">热门内容</span>
          <span class="bottom">24小时热门回答及文章</span>
        </div>
        <div class="item"
             v-for="hot in find.hotContent">
          <h1 class="title">{{hot.title}}</h1>
          <p @click="selectInfo(hot)" class="summary">{{hot.summary}}</p>
          <div class="bottom">
            <span>{{hot.look}} 浏览</span> • <span>{{hot.love}} 赞</span> • <span>{{hot.commit}} 评论</span>
          </div>
        </div>
        <div class="lookMore">查看更多热门内容</div>
      </div>
  
      <!--热门话题-->
      <div class="hot">
        <div class="title">
          <div class="top">
            <span class="topTit">热门话题</span>
            <span class="more">查看全部</span>
          </div>
          <span class="bottom">正在发生和讨论的热点话题</span>
        </div>
        <div class="itemWrapper">
          <div class="topicItem"
               v-for="t in find.hotTopic">
            <img :src="t.src" />
            <p class="topicName">{{t.name}}</p>
            <p class="topicLook">{{t.look}} 次浏览</p>
          </div>
        </div>
      </div>
  
    </div>

    <Info :info="selectedInfo" ref="info"></Info>
  </div>
</template>

<script>
import Info from '../Info/Info'
export default {
  name: 'find',
  data() {
    return {
      find: {},
      selectedInfo: {}
    }
  },
  created() {
    this.$http.get('/api/find').then((response) => {
      response = response.body;
      if (response.errno === 0) {
        this.find = response.find;
      }
    })
  },
  methods: {
    selectInfo (info) {
      this.selectedInfo = info;
      this.$refs.info.show();
    }
  },
  components: {
    Info
  }
}
</script>

<style lang="stylus">
.find
  background: rgb(245, 245, 245)
  min-height: 100vh
  padding-bottom: 60px
  box-sizing: border-box
  overflow: hidden
  width: 100%
  .findHeader
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
  .findNav
    box-sizing: border-box
    height: 80px
    width: 100%
    background: #fff
    margin-top: 60px
    padding: 15px 0
    display: flex
    justify-content: space-around
    text-align: center
    box-shadow: 0px 0px 3px #aaa
    .navItem
      display: flex
      flex-direction: column
      .icon
        width: 30px
        height: 30px
        color: #fff
        border-radius: 50%
        display: flex
        justify-content: center
        align-items: center
      .blue
        background: #0f88eb
      .orange
        background: rgb(222, 125, 44)
      .yellow
        background: rgb(244, 208, 0)
      .green
        background: rgb(29, 191, 151)      
      .iconText
        font-size: 12px
        font-weight: 200
        margin-top: 5px  
  .hot
    margin-top: 10px
    width: 100%
    background: #fff
    box-shadow: 0px 0px 3px #aaa
    box-sizing: border-box
    padding: 15px
    .title
      margin-bottom: 15px
      display: flex
      flex-direction: column
      .top
        font-size: 18px
        font-weight: 700
        display: flex
        align-items: center
        justify-content: space-between
        .topTit
          font-size: 18px
          font-weight: 700
        .more
          font-size: 16px
      .bottom
        font-size: 14px
        margin-top: 10px
        color: #999  
    .lookMore
      text-align: center
      border-top: 1px solid #d3d3d3
      padding-top: 15px
      color: #0f88eb  
    .item
      border-top: 1px solid #d3d3d3
      padding: 15px 0
      .title
        line-height: 1.5
      .summary
        line-height: 1.5
      .bottom
        color: #999
        font-weight: 100
        margin-top: 10px
    .itemWrapper
      border-top: 1px solid #d3d3d3
      padding: 15px 0
      width: 100%
      overflow-x: scroll
      display: flex
      .topicItem
        display: flex
        flex-direction: column
        margin-right: 10px
        img
          width: 120px
          height: 120px
          border-radius: 5px
          margin-bottom: 5px
          .topicName
            font-weight: 700
            margin-bottom: 5px
          .topicLook
            font-weight: 100
            color: #999      
</style>
