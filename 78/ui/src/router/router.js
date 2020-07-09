import Vue from "vue";
import VueRouter from "vue-router";

/* 引入组件 */
import home from '@/view/home.vue';
import my from '@/view/my.vue';
import cation from '@/view/cation.vue';
import shopping from '@/view/shopping.vue';
import whole from '@/view/whole.vue';
import distribution from '@/view/distribution.vue';
import dden from '@/view/dden.vue';
import sho from '@/view/sho.vue';

/* 要告诉Vue使用VueRouter */
Vue.use(VueRouter);

const routes = [{
		path: '/',
		component: home
	},
	{
		path: '/home',
		component: home
	},
	{
		path: '/my',
		component: my
	},
	{
		path: '/cation',
		component: cation
	},
	{
		path: '/shopping',
		component: shopping
	},
	{
		path: '/whole',
		component: whole
	},
	{
		path: '/distribution',
		component: distribution
	},
	{
		path: '/dden',
		component: dden
	},
	{
		path: '/sho',
		component: sho
	}
]


var router = new VueRouter({
	routes
})
export default router;
