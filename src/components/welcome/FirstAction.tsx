import { RouterLink } from "vue-router";
import { SkipFeatures } from "../../shared/SkipFeatures";
import s from "./WelcomeLayout.module.scss";
export const FirstAction = () => {
  return (
    <div class={s.actions}>
      <SkipFeatures class={s.fake} />
      <RouterLink to={"/welcome/2"}>下一页</RouterLink>
      <SkipFeatures />
    </div>
  );
};
FirstAction.displayName = "FirstAction";
