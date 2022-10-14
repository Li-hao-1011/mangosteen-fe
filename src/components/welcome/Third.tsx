import s from "./WelcomeLayout.module.scss";
export const Third = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref="#chart" />
    </svg>
    <h2>
      数据可视化
      <br />
      收支一目了然
    </h2>
  </div>
);
Third.displayName = "Third";
