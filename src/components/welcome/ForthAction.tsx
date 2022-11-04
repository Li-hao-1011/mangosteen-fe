import { RouterLink } from "vue-router";
import { SkipFeatures } from "../../shared/SkipFeatures";
import s from "./WelcomeLayout.module.scss";
const onClick = () => {
  localStorage.setItem("SkipFeatures", "yes");
};
export const ForthAction = () => (
  <div class={s.actions}>
    <SkipFeatures class={s.fake} />
    <span onClick={onClick}>
      <RouterLink to={"/start"}>开始应用</RouterLink>
    </span>
    <SkipFeatures class={s.fake} />
  </div>
);
ForthAction.displayName = "ForthAction";
