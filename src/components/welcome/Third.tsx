import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import s from "./First.module.scss";
import logo from "../../assets/icons/chart.svg";
export const Third = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.pig} src={logo} />
          <h2>
            数据可视化
            <br />
            收支一目了然
          </h2>
        </div>
        <div class={s.action}>
          <RouterLink class={s.fake} to={"/start"}>
            跳过
          </RouterLink>
          <RouterLink to={"/welcome/4"}>下一页</RouterLink>
          <RouterLink to={"/start"}>跳过</RouterLink>
        </div>
      </div>
    );
  },
});
