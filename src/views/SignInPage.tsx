import { defineComponent, PropType, reactive, ref } from "vue";
import { useBool } from "../hooks/useBool";
import { MainLayout } from "../layouts/MainLayout";
import { Button } from "../shared/Button";
import { Form, FormItem } from "../shared/Form";
import { http } from "../shared/Http";
import { Icon } from "../shared/Icon";
import { hasError, validate } from "../shared/validate";
import s from "./SignInPage.module.scss";
export const SignInPage = defineComponent({
  props: {
    name: {
      type: String as PropType<String>,
    },
  },
  setup: (props, context) => {
    const formData = reactive({
      email: "lihao.coder@foxmail.com",
      code: "",
    });
    const errors = reactive({
      email: [],
      code: [],
    });
    const onSubmit = async (e: Event) => {
      console.log("tijiao");

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

      if (!hasError(errors)) {
        const response = await http.post("/session", formData);
      }
    };
    const onError = (error: any) => {
      if (error.response.status === 422) {
        Object.assign(errors, error.response.data.errors);
      }
      throw error;
    };
    const refVilidationCode = ref<any>();
    const { ref: redDisabled, on, off } = useBool(false);
    const onClickSendValidationCode = async () => {
      on();
      await http
        .post("/validation_codes", {
          email: formData.email,
        })
        .catch(onError)
        .finally(off);
      refVilidationCode.value.startCount();
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
              <div>{JSON.stringify(formData)}</div>
              <Form onSubmit={onSubmit}>
                <FormItem
                  label="邮箱地址"
                  type="text"
                  v-model={formData.email}
                  error={errors["email"]?.[0] ?? "　"}
                  placeholder="请输入邮箱，然后点击发送验证码"
                ></FormItem>
                <FormItem
                  ref={refVilidationCode}
                  label="验证码"
                  type="vilidationCode"
                  v-model={formData.code}
                  countFrom={1}
                  error={errors["code"]?.[0] ?? "　"}
                  placeholder="请输入六位数字"
                  onClick={onClickSendValidationCode}
                  disabled={redDisabled.value}
                ></FormItem>
                <FormItem style={{ paddingTop: "64px" }}>
                  <Button type="submit">登录</Button>
                </FormItem>
              </Form>
            </div>
          ),
        }}
      </MainLayout>
    );
  },
});
