import { defineComponent, PropType } from "vue";
import { Charts } from "../components/statistics/Charts";
import { TimeTabsLayout } from "../layouts/TimeTabsLayout";
export const StatisticsPage = defineComponent({
  props: {
    name: {
      type: String as PropType<String>,
    },
  },
  setup: (props, context) => {
    // const;
    return () => <TimeTabsLayout component={Charts}></TimeTabsLayout>;
  },
});
