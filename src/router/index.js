import Vue from 'vue';
import Router from 'vue-router';




Vue.use(Router)

export default new Router({
	routes:[
		{
			name : 'Home Page',
			path : '/',
			component: () => import("../pages/HomePage.vue"),

		},
		{
			name : 'Calculator',
			path : '/calculator',
			component: () => import("../pages/calculator.vue"),

		},
		{
			name : 'About',
			path : '/about',
			component: () => import("../pages/about.vue"),

		},
		{
			name : 'Work',
			path : '/work',
			component: () => import("../pages/work.vue")
		},
		{
			name : 'Block chain',
			path : '/work/blockchain',
			component: () => import("../pages/blockchain.vue"),
		},



	]
})