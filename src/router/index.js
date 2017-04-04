import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/article/Article'
import Find from '../components/Find/Find'
import Remind from '../components/Remind/Remind'
import Message from '../components/Message/Message'
import Setting from '../components/Setting/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
  ]
})
