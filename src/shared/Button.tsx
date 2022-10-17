import { defineComponent } from "vue";
import s from "./Button.module.scss";
type Props = {
  onClick?: (e: MouseEvent) => void | undefined;
};
export const Button = defineComponent<Props>({
  setup: (props, { slots }) => {
    return () => <button class={s.button}>{slots.default?.()}</button>;
  },
});
