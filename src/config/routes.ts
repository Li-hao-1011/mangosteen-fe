import { RouteRecordRaw } from "vue-router";
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { Welcome } from "../views/Welcome";
import { First } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Forth } from "../components/welcome/Forth";

export const routes: RouteRecordRaw[] = [
  { path: "/", component: Welcome },
  // { path: "/about", component: Bar },

  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "first", component: First },
      { path: "second", component: Second },
      { path: "third", component: Third },
      { path: "forth", component: Forth },
    ],
  },
];
