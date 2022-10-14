import s from "./WelcomeLayout.module.scss";
import logo from "../../assets/icons/chart.svg";
export const Third = () => (
  <div class={s.card}>
    <img class={s.pig} src={logo} />
    <h2>
      数据可视化
      <br />
      收支一目了然
    </h2>
  </div>
);
Third.displayName = "Third";
