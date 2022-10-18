import { defineComponent, PropType } from "vue";
import { RouterView } from "vue-router";
import s from "./ItemPage.module.scss";
export const ItemPage = defineComponent({
  props: {
    name: {
      type: String as PropType<String>,
    },
  },
  setup: (props, context) => {
    return () => (
      <div>
        hi
        <RouterView />
      </div>
    );
  },
});
