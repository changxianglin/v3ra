import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: '',
        name: '',
        component: () => import('../components/HelloWorld.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/about.vue'),
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async(to, from) => {
  console.log('参数', to)
})

export default router