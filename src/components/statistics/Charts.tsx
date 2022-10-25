import { defineComponent, PropType } from "vue";
import s from "./Charts.module.scss";
export const Charts = defineComponent({
  props: {
    startDate: {
      type: String as PropType<String>,
      require: true,
    },
    endDate: {
      type: String as PropType<String>,
      require: true,
    },
  },
  setup: (props, context) => {
    return () => <div class={s.wrapper}>Charts</div>;
  },
});
