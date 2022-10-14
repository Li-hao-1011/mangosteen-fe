import { RouterLink } from "vue-router";
import s from "./WelcomeLayout.module.scss";
export const ForthAction = () => (
  <div class={s.actions}>
    <RouterLink class={s.fake} to={"/start"}>
      跳过
    </RouterLink>
    <RouterLink to={"/start"}>开始应用</RouterLink>
    <RouterLink class={s.fake} to={"/start"}>
      跳过
    </RouterLink>
  </div>
);
ForthAction.displayName = "ForthAction";
