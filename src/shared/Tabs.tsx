import { defineComponent, PropType } from "vue";
import s from "./Tabs.module.scss";
export const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<String>,
    },
    onUpdateSelected: {
      type: Function as PropType<(name: string) => void>,
    },
  },
  setup: (props, context) => {
    return () => {
      const els = context.slots.default?.();
      if (!els) return () => null;
      for (let i = 0; i < els.length; i++) {
        if (els[i].type !== Tab) {
          throw new Error("Tabs only accepts <Tab /> as children");
        }
      }
      return (
        <div class={s.tabs}>
          <ol class={s.tabs_nav}>
            {els.map((item) => (
              <li
                class={item.props?.name === props.selected ? s.selected : ""}
                onClick={() => {
                  props.onUpdateSelected?.(item.props?.name);
                }}
              >
                {/* <li class={item.props?.name === props.selected ? s.selected : ""} onClick={() => { context.emit("update:selected", item.props?.name); }} > */}
                {item.props?.name}
              </li>
            ))}
          </ol>
          <div></div>
        </div>
      );
    };
  },
});

export const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<String>,
      require: true,
    },
  },
  setup: (props, context) => {
    return () => <div>{context.slots.default?.()}</div>;
  },
});
