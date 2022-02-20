import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import CreateUser from "../views/CreateUser";
import Table from "../views/Table";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/createuser",
    component: CreateUser,
    name: "CreateUser",
  },
  {
    path: "/users",
    component: Table,
    name: "Table",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
