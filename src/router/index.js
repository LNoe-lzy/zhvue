import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/article/Article'
import Find from '../components/find/Find'
import Remind from '../components/Remind/Remind'
import Message from '../components/message/Message'
import Setting from '../components/setting/Setting'
import Info from '../components/Info/Info'
import Collections from '../components/collections/Collections'
import Follow from '../components/follow/Follow'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Article
    },
    {
      path: '/article',
      component: Article
    },
    {
      path: '/find',
      component: Find
    },
    {
      path: '/remind',
      component: Remind
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/setting',
      component: Setting
    },
    {
      path: '/collections',
      component: Collections
    },
    {
      path: '/follow',
      component: Follow
    }
  ]
})
