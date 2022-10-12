import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import s from "./First.module.scss";
import logo from "../../assets/icons/pig.svg";
export const First = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.pig} src={logo} />
          <h2>
            会挣钱
            <br />
            还会省钱
          </h2>
        </div>
        <div class={s.action}>
          <RouterLink class={s.fake} to={"/start"}>
            跳过
          </RouterLink>
          <RouterLink to={"/welcome/2"}>下一页</RouterLink>
          <RouterLink to={"/start"}>跳过</RouterLink>
        </div>
      </div>
    );
  },
});
