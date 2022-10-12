import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from "./Welcome.module.scss";
import logo from "../assets/icons/mangosteensvg.svg";
export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={logo} />
          <h6>山竹记账</h6>
        </header>
        <main>
          <RouterView />
        </main>
      </div>
    );
  },
});
