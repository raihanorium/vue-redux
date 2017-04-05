import $ from 'jquery';
import bootstrap from 'bootstrap';

import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';

import Auth from './services/auth-service';

import Login from './components/login-page';
import Home from './components/home-page';

// require all .js files from src folder
function requireAll(r) {
    r.keys().forEach(r);
}
requireAll(require.context('/', true, /\.js$/));

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Home,
    meta: { requiresAuth: true }
}, {
    path: '/login',
    component: Login
}];

export const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!Auth.isAuthenticated) {
            console.log('Not logged in. Redirecting...');
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
        else {
            next();
        }
    } else{
        next();
    }
});

const app = new Vue({
    router,
    data: {
        title: 'App'
    }
}).$mount('#app');

export default app;