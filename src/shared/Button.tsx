import { defineComponent, PropType } from "vue";
import s from "./Button.module.scss";
/* type Props = {
  onClick?: (e: MouseEvent) => void | undefined;
}; */
export const Button = defineComponent({
  props: {
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void | undefined>,
    },
    level: {
      type: String as PropType<"important" | "normal" | "danger">,
      default: "important",
    },
    type: {
      type: String as PropType<"submit" | "button">,
    },
  },
  setup: (props, { slots }) => {
    return () => (
      <button type={props.type} class={[s.button, s[props.level]]}>{slots.default?.()}</button>
    );
  },
});
