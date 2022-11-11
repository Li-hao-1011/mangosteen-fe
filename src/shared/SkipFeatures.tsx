import { defineComponent, PropType } from "vue";
import { RouterLink } from "vue-router";
export const SkipFeatures = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      localStorage.setItem("SkipFeatures", "yes");
    };
    return () => (
      <span onClick={onClick}>
        <RouterLink to="/items">跳过</RouterLink>
      </span>
    )
  },
});
