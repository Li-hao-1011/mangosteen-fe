import { defineComponent, PropType } from "vue";
import { ItemCreate } from "../components/item/ItemCreate";
import s from "./Tabs.module.scss";
export const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<string>,
      required: false,
    },
    /*     onUpdateSelected: {
      type: Function as PropType<(name: string) => void>,
      required: false,
    }, */
    classPrefix: {
      type: String,
    },
    renderOnSelect: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:selected"],
  setup: (props, context) => {
    return () => {
      const tabEls = context.slots.default?.();
      if (!tabEls) return () => null;
      for (let i = 0; i < tabEls.length; i++) {
        if (tabEls[i].type !== Tab) {
          throw new Error("Tabs only accepts <Tab /> as children");
        }
      }
      const cp = props.classPrefix;
      return (
        <div class={[s.tabs, cp + "_tabs"]}>
          <ol class={[s.tabs_nav, cp + "_tabs_nav"]}>
            {tabEls.map((item) => (
              <li
                class={[
                  item.props?.name === props.selected
                    ? [s.selected, cp + "_selected"]
                    : "",
                  cp + "_tabs_nav_item",
                ]}
                onClick={() => {
                  // props.onUpdateSelected?.(item.props?.name);
                  context.emit("update:selected", item.props?.name);
                }}
              >
                {/* <li class={[item.props?.name === props.selected ? s.selected : "",
                cp + "_tabs_nav_item",
              ]} onClick={() => { context.emit("update:selected", item.props?.name); }} > */}
                {item.props?.name}
              </li>
            ))}
          </ol>
          <div>
            {props.renderOnSelect ? (
              <div key={props.selected}>
                {tabEls.find((item) => item.props?.name === props.selected)}
              </div>
            ) : (
              <div>
                {tabEls.map((item) => (
                  <div
                    v-show={item.props?.name === props.selected}
                    /*  style={{
                  display:
                    item.props?.name === props.selected ? "block" : "none",
                }} */
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
            {/* {tabEls.find((item) => item.props?.name === props.selected)} */}
          </div>
        </div>
      );
    };
  },
});

export const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup: (props, context) => {
    return () => <div>{context.slots.default?.()}</div>;
  },
});
