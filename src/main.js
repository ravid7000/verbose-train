import Vue from 'vue'
import Router from 'vue-router';
import Vuex from 'vuex'

// main app
import App from './App.vue';

// pages
import Home from './pages/home.vue';
import New from './pages/new.vue';
import BlogDetail from './pages/blog-detail.vue';
import Words from './pages/words.vue';
import WordDetail from './pages/word-detail.vue';
import EditBlog from './pages/edit-blog.vue';

// store state
import state from './store';

Vue.config.productionTip = false


// middlewares
Vue.use(Router);
Vue.use(Vuex);

// store
const store = new Vuex.Store(state);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/blogs/:id', component: BlogDetail },
    { path: '/edit/:id', component: EditBlog },
    { path: '/words/:id', component: WordDetail },
    { path: '/new', component: New },
    { path: '/words', component: Words },
    { path: '/', component: Home },
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
