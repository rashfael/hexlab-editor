import Vue from 'vue'
import main from 'main.vue'
import router from 'router'
import store from 'store'
import Buntpapier from 'buntpapier'

import api from 'lib/api'
Vue.use(Buntpapier)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth) && !api.auth.authenticated) {
		next({path: '/login'})
	} else {
		next()
	}
})

const init = () => {
	new Vue({
		router,
		store,
		render: h => h(main)
	}).$mount('#app')
}

api.auth.getSession().then(() => {
	console.log('initing!')
	init()
}).catch((error) => {
	console.error(error)
	init()
})
