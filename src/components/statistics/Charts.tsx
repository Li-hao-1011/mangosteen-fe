import { defineComponent, PropType, ref } from "vue";
import { FormItem } from "../../shared/Form";
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
    const category = ref("支出");
    return () => (
      <div class={s.wrapper}>
        {category.value}
        <br />
        <FormItem
          label="类型"
          type="select"
          options={[
            { value: "expenses", text: "支出" },
            { value: "income", text: "收入" },
          ]}
          v-model={category.value}
        />
      </div>
    );
  },
});
