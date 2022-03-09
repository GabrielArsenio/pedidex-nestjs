import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Clientes from "../views/Clientes.vue";
import ClientesForm from "../views/ClientesForm.vue";
import Produtos from "../views/Produtos.vue";
import ProdutosForm from "../views/ProdutosForm.vue";
import Billing from "../views/Billing.vue";
import RTL from "../views/Rtl.vue";
import Notifications from "../views/Notifications.vue";
import Profile from "../views/Profile.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/clientes",
    name: "Clientes",
    component: Clientes
  },
  {
    path: "/novo-cliente",
    name: "Novo Cliente",
    component: ClientesForm
  },
  {
    path: "/editar-cliente/:id",
    name: "Editar Cliente",
    component: ClientesForm
  },
  {
    path: "/produtos",
    name: "Produtos",
    component: Produtos
  },
  {
    path: "/novo-produto",
    name: "Novo Produto",
    component: ProdutosForm
  },
  {
    path: "/editar-produto/:id",
    name: "Editar Produto",
    component: ProdutosForm
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeEach(to => {
  if (!localStorage.getItem('token') && to.name !== 'SignIn' && to.name !== 'SignUp') {
    return { name: 'SignIn' }
  }
  return true
})

export default router;
