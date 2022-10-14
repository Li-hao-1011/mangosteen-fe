import s from "./WelcomeLayout.module.scss";
export const Second = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref="#clock" />
    </svg>
    <h2>
      每日提醒
      <br />
      不会遗漏每一笔账单
    </h2>
  </div>
);
Second.displayName = "Second";
