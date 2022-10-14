import s from "./WelcomeLayout.module.scss";
import logo from "../../assets/icons/clock.svg";
export const Second = () => (
  <div class={s.card}>
    <img src={logo} />
    <h2>
      每日提醒
      <br />
      不会遗漏每一笔账单
    </h2>
  </div>
);
Second.displayName = "Second";
