import { defineComponent, PropType } from "vue";
import { RouterView } from "vue-router";
import s from "./TagPage.module.scss";
export const TagPage = defineComponent({
  props: {
    name: {
      type: String as PropType<String>,
    },
  },
  setup: (props, context) => {
    return () => (
      <div>
        <RouterView />
      </div>
    );
  },
});
