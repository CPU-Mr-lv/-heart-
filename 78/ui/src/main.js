import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from './router/router.js'

import { Image as VanImage } from 'vant';

import { Icon } from 'vant';

import { Search } from 'vant';

import { Button } from 'vant';

import { Card } from 'vant';

import { Swipe, SwipeItem } from 'vant';

import { Grid, GridItem } from 'vant';


import { NavBar } from 'vant';

import { SubmitBar } from 'vant';

Vue.use(SubmitBar);

Vue.use(NavBar);

Vue.use(Grid);
Vue.use(GridItem);

Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.use(Card);

Vue.use(Button);

Vue.use(Search);
Vue.use(Icon);

Vue.use(VanImage);
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
