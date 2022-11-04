import { RouterLink } from "vue-router";
import { SkipFeatures } from "../../shared/SkipFeatures";
import s from "./WelcomeLayout.module.scss";
export const ThirdAction = () => (
  <div class={s.actions}>
    <SkipFeatures class={s.fake} />
    <RouterLink to={"/welcome/4"}>下一页</RouterLink>
    <SkipFeatures />
  </div>
);
ThirdAction.displayName = "ThirdAction";
