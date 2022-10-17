import { defineComponent, PropType } from "vue";
import { Icon } from "./Icon";
import s from "./Overlay.module.scss";
export const Overlay = defineComponent({
  props: {
    onClose: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
  setup: (props, context) => {
    const close = () => {
      props.onClose?.();
    };
    return () => (
      <>
        <div class={s.mask} onClick={close}></div>
        <div class={s.overlay}>
          <section>
            <h2>未登录</h2>
            <p>点击登录</p>
          </section>
          <nav>
            <ul>
              <li>
                <Icon name="charts" />
                <span>统计图表</span>
              </li>
              <li>
                <Icon name="export" />
                <span>导出数据</span>
              </li>
              <li>
                <Icon name="notion" />
                <span>记账提醒</span>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  },
});
