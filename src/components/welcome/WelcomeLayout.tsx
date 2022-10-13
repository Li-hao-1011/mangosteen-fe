import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import s from "./WelcomeLayout.module.scss";
export const WelcomeLayout = defineComponent({
  setup: (props, context) => {
    const { slots } = context;
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          {slots.icon?.()}
          {slots.title?.()}
        </div>
        <div class={s.action}>{slots.buttons?.()}</div>
      </div>
    );
  },
});
