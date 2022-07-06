import { createWebHistory, createRouter } from 'vue-router';
import HomeView from './views/HomeView.vue';
import WorkView from './views/WorkView.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
    {
		path: '/work',
		name: 'work',
		component: WorkView,
	},
    {
		path: '/about',
		name: 'about',
		component: AboutView,
	},
    {
		path: '/contact',
		name: 'contact',
		component: ContactView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;