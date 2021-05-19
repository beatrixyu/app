import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";


Vue.use(VueRouter);

const routes = [
  { 
    path: "/",
    name: "Login",
    component: Login
  },
  { 
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  { 
    path: "/page-not-found",
    name: "404",
    component: {
      template: '<p>Page Not Found<img src="../assets/images/logo.png"/></p>'
  }  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router