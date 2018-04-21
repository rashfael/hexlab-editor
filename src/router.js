import Vue from 'vue'
import Router from 'vue-router'
import App from 'App.vue'
import About from './views/About.vue'
import Login from 'views/login'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: App,
			meta: {requiresAuth: true}
		},
		{
			path: '/about',
			name: 'about',
			component: About
		}, {
			path: '/login',
			component: Login,
			name: 'login'
		}
	]
})
