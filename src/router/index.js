import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


/**
 * 通用 路由 名单
 * */
export const constantRoutes = [
	{
		path: '/login',
		component: () => import('@/views/login/index'),
	}
]



const router = new VueRouter({
	mdoe: 'history',
	routes: constantRoutes
})

export default router
