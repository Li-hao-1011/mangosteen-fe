import { defineComponent } from "vue";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";
import { Navbar } from "../shared/Navbar";
import s from "./StartPage.module.scss";
export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log("hi");
    };
    return () => (
      <div>
        <nav>
          <Navbar>
            {{
              default: () => "山竹记账",
              icon: () => <Icon name="menu" class={s.nav_icon} />,
            }}
          </Navbar>
        </nav>
        <Center class={s.wrapper}>
          <Icon name="pig" class={s.center_icon} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>
            开始记账
          </Button>
        </div>

        <FloatButton iconName="add"></FloatButton>
      </div>
    );
  },
});
