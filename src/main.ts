import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { App } from "./App";
import { Bar } from "./views/Bar";
import { Foo } from "./views/Foo";

const routes = [
  { path: "/", component: Bar },
  { path: "/about", component: Foo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
