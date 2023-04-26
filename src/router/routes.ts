import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Pasty from '@/views/Pasty.vue'
import Pasta from '@/views/Pasta.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pasty',
    name: 'Pasty',
    component: Pasty,
  },
  {
    path: '/pasta/:id',
    name: 'Pasta',
    component: Pasta,
  },
]

export default routes
