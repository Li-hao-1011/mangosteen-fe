import { defineComponent, PropType, reactive } from "vue";
import { MainLayout } from "../layouts/MainLayout";
import { Button } from "../shared/Button";
import { Form, FormItem } from "../shared/Form";
import { Icon } from "../shared/Icon";
import { validate } from "../shared/validate";
import s from "./SignInPage.module.scss";
export const SignInPage = defineComponent({
  props: {
    name: {
      type: String as PropType<String>,
    },
  },
  setup: (props, context) => {
    const formData = reactive({
      email: "",
      code: "",
    });
    const errors = reactive({
      email: [],
      code: [],
    });
    const onSubmit = (e: Event) => {
      e.preventDefault();
      Object.assign(errors, {
        email: [],
        code: [],
      });
      Object.assign(
        errors,
        validate(formData, [
          { key: "email", type: "required", message: "必填" },
          {
            key: "email",
            type: "pattern",
            regex: /.+@.+/,
            message: "请输入正确的邮箱",
          },
          { key: "code", type: "required", message: "必填" },
        ])
      );
    };
    const onClickSendValidationCode = () => {
      console.log(12222222222);
    };
    return () => (
      <MainLayout>
        {{
          title: () => "登录",
          icon: () => <Icon name="left" />,
          default: () => (
            <div class={s.wrapper}>
              <div class={s.logo}>
                <Icon class={s.icon} name="mangosteensvg" />
                <h1 class={s.appName}>山竹记账</h1>
              </div>
              <Form onSubmit={onSubmit}>
                <FormItem
                  label="邮箱地址"
                  type="text"
                  v-model={formData.email}
                  error={errors["email"]?.[0] ?? "　"}
                  placeholder="请输入邮箱，然后点击发送验证码"
                ></FormItem>
                <FormItem
                  label="验证码"
                  type="vilidationCode"
                  v-model={formData.code}
                  error={errors["code"]?.[0] ?? "　"}
                  placeholder="请输入六位数字"
                  onClick={onClickSendValidationCode}
                ></FormItem>
                <FormItem style={{ paddingTop: "64px" }}>
                  <Button>登录</Button>
                </FormItem>
              </Form>
            </div>
          ),
        }}
      </MainLayout>
    );
  },
});
