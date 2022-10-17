import { defineComponent, ref } from "vue";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";
import { Navbar } from "../shared/Navbar";
import { Overlay } from "../shared/Overlay";
import s from "./StartPage.module.scss";
export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log("hi");
    };
    const refOverlayVisible = ref(false);
    const onClickMenu = () => {
      refOverlayVisible.value = !refOverlayVisible.value;
    };

    return () => (
      <div>
        <nav>
          <Navbar>
            {{
              default: () => "山竹记账",
              icon: () => (
                <Icon name="menu" class={s.nav_icon} onClick={onClickMenu} />
              ),
            }}
          </Navbar>
        </nav>
        <Center class={s.wrapper}>
          <Icon name="pig" class={s.center_icon} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button}>开始记账</Button>
        </div>
        <FloatButton iconName="add"></FloatButton>

        {refOverlayVisible.value && (
          <Overlay onClose={() => (refOverlayVisible.value = false)}></Overlay>
        )}
      </div>
    );
  },
});
