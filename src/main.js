import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import Home from './components/Home.vue';
import Company from './components/Company.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{ path: '/', component: Home },
		{ path: '/company', component: Company },
		// { path: '/services', component: Services },
		// { path: '/igps', component: iGPS },
		// { path: '/clients', component: Clients },
		// { path: '/publications', component: Publications },
		// { path: '/people', component: People },
		// { path: '/contact', component: Contact },
	]
});

new Vue({
	render: (h) => h(App),
	router
}).$mount('#app');
