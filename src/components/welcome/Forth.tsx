import s from "./WelcomeLayout.module.scss";
import logo from "../../assets/icons/cloud.svg";
export const Forth = () => (
  <div class={s.card}>
    <img src={logo} />
    <h2>
      云备份
      <br />
      再也不怕收据丢失
    </h2>
  </div>
);
Forth.displayName = "Forth";
