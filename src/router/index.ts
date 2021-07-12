import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// 라우트 컴포넌트 설정
const AskView = () => import ('@/components/ask/AskView.vue')
const JobsView = () => import ('@/components/jobs/JobsView.vue')
const NewsView = () => import ('@/components/news/NewsView.vue')
const UserView = () => import ('@/components/common/viewItem/UserView.vue')
const ItemView = () => import ('@/components/common/viewItem/ItemView.vue')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect : '/news',
  },
  {
    path: '/ask',
    name: 'AskView',
    component: AskView
  },
  {
    path: '/jobs',
    name: 'JobsView',
    component: JobsView
  },
  {
    path: '/news',
    name: 'NewsView',
    component: NewsView
  },
  {
    path: '/users',
    name: 'UserView',
    component: UserView
  },
  {
    path: '/items',
    name: 'ItemView',
    component: ItemView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
