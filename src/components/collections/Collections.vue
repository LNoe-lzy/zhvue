<template>
    <div>
        <div class="collections">
            <MinHeader type="收藏" path="/setting"></MinHeader>
            <div class="wrapper">
                <div class="item"
                     v-for="(col, index) in collections">
                    <div class="top">
                        <div class="avatar"><img :src="col.user.avatar"></div>
                        <div class="topic">{{col.topic}}</div>
                        <div class="remove" @click="removeCollection(index)">取消收藏</div>
                    </div>
                    <h1 class="title">{{col.title}}</h1>
                    <p @click="selectArticle(col)"
                       class="summary">{{col.summary}}</p>
                    <div class="bottom">
                        <span>{{col.love}} 赞同</span> • <span>{{col.commit}} 评论</span> • <span>关注问题</span>
                    </div>
                </div>
            </div>
        </div>
        <Info :info="selectedArticle"
              ref="info"></Info>
    </div>
</template>
<script>
import Info from '../Info/Info'
import MinHeader from '../minHeader/MinHeader'
export default {
    name: 'collections',
    data() {
        return {
            collections: [],
            selectedArticle: {}
        }
    },
    created() {
        this.collections = this.$store.state.collections;
    },
    methods: {
        selectArticle(article) {
            this.selectedArticle = article;
            // 显示info组件
            this.$refs.info.show();
        },
        // 取消关注
        removeCollection(index) {
            this.$store.dispatch('removeCollection', index);
        }
    },
    components: {
        Info,
        MinHeader
    }
}
</script>

<style lang="stylus">
.collections
   width: 100%
   .collection-header
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
     .collection-back
       color: #fff
     .collection-title
       margin-left: 15px
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
           flex: 1
         .remove
           font-size: 14px
           font-weight: 100
           padding: 10px
           background: #0f88eb
           color: #fff    
           border-radius: 5px  
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
