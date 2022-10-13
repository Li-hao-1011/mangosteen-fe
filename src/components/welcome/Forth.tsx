import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import s from "./First.module.scss";
import logo from "../../assets/icons/cloud.svg";
export const Forth = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.pig} src={logo} />
          <h2>
            云备份
            <br />
            再也不怕收据丢失
          </h2>
        </div>
        <div class={s.action}>
          <RouterLink class={s.fake} to={"/start"}>
            跳过
          </RouterLink>
          <RouterLink to={"/start"}>开始应用</RouterLink>
          <RouterLink class={s.fake} to={"/start"}>
            跳过
          </RouterLink>
        </div>
      </div>
    );
  },
});
