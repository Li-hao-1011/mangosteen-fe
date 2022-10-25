import { RouteRecordRaw } from "vue-router";
import { Welcome } from "../views/Welcome";
import { First } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Forth } from "../components/welcome/Forth";
import { FirstAction } from "../components/welcome/FirstAction";
import { SecondAction } from "../components/welcome/SecondAction";
import { ThirdAction } from "../components/welcome/ThirdAction";
import { ForthAction } from "../components/welcome/ForthAction";
import { StartPage } from "../views/StartPage";
import { ItemPage } from "../views/ItemPage";
import { ItemList } from "../components/item/ItemList";
import { ItemCreate } from "../components/item/ItemCreate";
import { TagPage } from "../views/TagPage";
import { TagCreate } from "../components/tag/TagCreate";
import { TagEdit } from "../components/tag/TagEdit";
import { SignInPage } from "../views/SignInPage";

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/1" },
      {
        path: "1",
        name: "Welcome1",
        components: { main: First, footer: FirstAction },
      },
      {
        path: "2",
        name: "Welcome2",
        components: { main: Second, footer: SecondAction },
      },
      {
        path: "3",
        name: "Welcome3",
        components: { main: Third, footer: ThirdAction },
      },
      {
        path: "4",
        name: "Welcome4",
        components: { main: Forth, footer: ForthAction },
      },
    ],
  },
  {
    path: "/start",
    component: StartPage,
  },
  {
    path: "/items",
    component: ItemPage,
    children: [
      { path: "", redirect: "/items/list" },
      { path: "create", name: "ItemCreate", component: ItemCreate },
      { path: "list", name: "ItemList", component: ItemList },
    ],
  },
  {
    path: "/tags",
    component: TagPage,
    children: [
      { path: "create", component: TagCreate },
      { path: ":id/edit", component: TagEdit },
    ],
  },
  {
    path: "/sign_in",
    component: SignInPage,
 
  },
];
