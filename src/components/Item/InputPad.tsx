import { defineComponent, PropType } from "vue";
import { Icon } from "../../shared/Icon";
import s from "./InputPad.module.scss";
export const InputPad = defineComponent({
  props: {
    name: {
      type: String as PropType<String>,
    },
  },
  setup: (props, context) => {
    const btnMap = [
      { text: "1", onClick: () => {} },
      { text: "1", onClick: () => {} },
      { text: "1", onClick: () => {} },
      { text: "1", onClick: () => {} },
      { text: "1", onClick: () => {} },
      { text: "1", onClick: () => {} },
      { text: "1", onClick: () => {} },
      { text: "1", onClick: () => {} },
      { text: "1", onClick: () => {} },
      { text: "1", onClick: () => {} },
      { text: "1", onClick: () => {} },
      { text: "1", onClick: () => {} },
      { text: "1", onClick: () => {} },
      { text: "1", onClick: () => {} },
      { text: "1", onClick: () => {} },
      { text: "1", onClick: () => {} },
      { text: "1", onClick: () => {} },
      { text: "1", onClick: () => {} },
    ];
    return () => (
      <>
        <div class={s.date_and_amount}>
          <span class={s.date}>
            <Icon name="date" class={s.icon} />
            <span>2022-10-19</span>
          </span>
          <span class={s.amount}>1999.99</span>
        </div>
        <div></div>
      </>
    );
  },
});
