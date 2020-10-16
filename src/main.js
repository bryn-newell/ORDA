import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import Home from './components/Home.vue';
import Company from './components/Company.vue';
import Services from './components/Services.vue';
import People from './components/People.vue';
import PrivacyPolicy from './components/PrivacyPolicy.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{ path: '/', component: Home },
		{ path: '/company', component: Company },
		{ path: '/services', component: Services },
		// { path: '/igps', component: iGPS },
		// { path: '/clients', component: Clients },
		// { path: '/publications', component: Publications },
		{ path: '/people', component: People },
		{ path: '/privacyPolicy', component: PrivacyPolicy }
	]
});

new Vue({
	render: (h) => h(App),
	router
}).$mount('#app');
