import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import s from "./WelcomeLayout.module.scss";
import logo from "../../assets/icons/cloud.svg";
import { WelcomeLayout } from "./WelcomeLayout";
export const Forth = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img class={s.pig} src={logo} />,
          title: () => (
            <>
              <h2>
                云备份
                <br />
                再也不怕收据丢失
              </h2>
            </>
          ),
          buttons: () => (
            <>
              <RouterLink class={s.fake} to={"/start"}>
                跳过
              </RouterLink>
              <RouterLink to={"/start"}>开始应用</RouterLink>
              <RouterLink class={s.fake} to={"/start"}>
                跳过
              </RouterLink>
            </>
          ),
        }}
      </WelcomeLayout>
    );
  },
});
