import Vue from "vue";
import Router from "vue-router";
import Home from '../components/Home'
// import Helloworld from '../components/HelloWorld'
import Shop from '../components/Shop'
import News from '../components/News'


Vue.use(Router);

export default new Router({
    routes: [{
        path: "/",
        name: 'Home',
        component: Home
    },
    {
        path: "/news",
        name: 'News',
        component: News
    },
    {
        path: "/shop",
        name: 'Shop',
        component: Shop
    }]
});