import { RouterLink } from "vue-router";
import s from "./WelcomeLayout.module.scss";
export const SecondAction = () => (
  <div class={s.actions}>
    <RouterLink class={s.fake} to={"/start"}>
      跳过
    </RouterLink>
    <RouterLink to={"/welcome/3"}>下一页</RouterLink>
    <RouterLink to={"/start"}>跳过</RouterLink>
  </div>
);
SecondAction.displayName = "SecondAction";
