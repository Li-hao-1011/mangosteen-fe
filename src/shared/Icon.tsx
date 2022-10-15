import { defineComponent, PropType } from "vue";
import s from "./Icon.module.scss";
// interface Props {
//   name: string;
// }
export const Icon = defineComponent({
  props: {
    name: String as PropType<string>,
  },
  setup: (props, context) => {
    return () => (
      <svg class={s.icon}>
        <use xlinkHref={"#" + props.name}></use>
      </svg>
    );
  },
});
