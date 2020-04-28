import Vue from 'vue';
import Router from 'vue-router';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import Master from '../components/Master';
import Details from '../components/Details';
import Parameters from '../components/Parameters';
//import * as firebase from 'firebase';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
/*         {
            path: '*',
            redirect: '/signin'
        }, */
        {
            path: '/signin',
            name: 'signin',
            component: SignIn,
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/historical',
            name: 'master',
            component: Master,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/historical/:date',
            name: 'details',
            component: Details,
            props: true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/parameters',
            name: 'parameters',
            component: Parameters,
            props: true,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

/* router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser

    if (requiresAuth && !currentUser) {
        next('/signin')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
}) */

export default router;