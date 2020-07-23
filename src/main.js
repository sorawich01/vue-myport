import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueParallaxJs from 'vue-parallax-js'
import animatecss from 'animate.css'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import VueScrollTo from 'vue-scrollto'

// //import material-icon scss
// import "font-awesome/css/font-awesome.min.css";

// //defined as global component
// Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);


Vue.use(VueScrollTo)
Vue.use(animatecss);
Vue.use(VueParallaxJs);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false

new Vue({
	router,
	// created(){
	// 	AOS.init()
	// },
	render: h => h(App),
	useEslint: false,
}).$mount('#app')
