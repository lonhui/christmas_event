import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Game from '@/pages/game'
import Rule from '@/pages/rule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/rule',
      name: 'Rule',
      component: Rule
    },
  ]
})
