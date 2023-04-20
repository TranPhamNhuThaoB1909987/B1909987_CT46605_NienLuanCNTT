import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/home.vue';
import SignIn from '../views/signin.vue';
import SignUp from '../views/signup.vue';
import Cart from '../views/cart.vue';
import adminPage from '../views/adminPage.vue';
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/signin",
        name: "SignIn",
        component: SignIn,
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart
    },
    {
        path: "/admin",
        name: "adminPage",
        component: adminPage
    }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;