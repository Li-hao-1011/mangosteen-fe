import { Dialog } from "vant";
import { defineComponent, onMounted, PropType, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { Icon } from "./Icon";
import { promiseMe } from "./me";
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
    const route = useRoute();
    const me = ref<User>();
    onMounted(async () => {
      const res = await promiseMe;
      me.value = res?.data.resource;
    });
    const onSignOut = async () => {
      await Dialog.confirm({ title: "确认", message: "您确定退出登录吗？" });
      localStorage.removeItem("jwt");
    };
    return () => (
      <>
        <div class={s.mask} onClick={close}></div>
        <div class={s.overlay}>
          <section class={s.current_user}>
            {me.value ? (
              <div>
                <h2 class={s.email}>{me.value.email}</h2>
                <p onClick={onSignOut}>点击这里注销</p>
              </div>
            ) : (
              <RouterLink to={`/sign_in?return_to=${route.fullPath}`}>
                <h2>未登录</h2>
                <p>点击登录</p>
              </RouterLink>
            )}
          </section>
          <nav>
            <ul class={s.action_list}>
              <li>
                <RouterLink to="/statistics" class={s.action}>
                  <Icon name="charts" class={s.icon} />
                  <span>统计图表</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/export" class={s.action}>
                  <Icon name="export" class={s.icon} />
                  <span>导出数据</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/notify" class={s.action}>
                  <Icon name="notify" class={s.icon} />
                  <span>记账提醒</span>
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  },
});

export const OverlayIcon = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const refOverlayVisible = ref(false);
    const onClickMenu = () => {
      refOverlayVisible.value = !refOverlayVisible.value;
    };
    return () => (
      <>
        <Icon name="menu" class={s.icon} onClick={onClickMenu} />
        {refOverlayVisible.value && (
          <Overlay onClose={() => (refOverlayVisible.value = false)}></Overlay>
        )}
      </>
    );
  },
});
