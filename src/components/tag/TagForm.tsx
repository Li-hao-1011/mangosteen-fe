import { defineComponent, PropType, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Button } from "../../shared/Button";
import { EmojiSelect } from "../../shared/EmojiSelect";
import { Form, FormItem } from "../../shared/Form";
import { http } from "../../shared/Http";
import { onFormError } from "../../shared/onFormError";
import { hasError, Rules, validate } from "../../shared/validate";
import s from "./Tag.module.scss";
export const TagForm = defineComponent({
  props: {
    name: {
      type: String as PropType<String>,
    },
  },
  setup: (props, context) => {
    const route = useRoute();
    const router = useRouter();
    if (!route.query.kind) {
      return () => <div>参数错误</div>;
    }
    const formData = reactive({
      kind: route.query.kind!.toString(),
      name: "",
      sign: "",
    });
    const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({});
    const onSubmit = async (e: Event) => {
      e.preventDefault();
      const rules: Rules<typeof formData> = [
        { key: "name", type: "required", message: "必填" },
        {
          key: "name",
          type: "pattern",
          regex: /^.{1,4}$/,
          message: "只能填 1 到 4 个字符",
        },

        { key: "sign", type: "required", message: "必填" },
      ];
      Object.assign(errors, {
        name: [],
        sign: [],
      });
      Object.assign(errors, validate(formData, rules));
      if (!hasError(errors)) {
        const res = await http
          .post("/tags", formData, {
            params: {
              _moke: "tagCreate",
            },
          })
          .catch((error) =>
            onFormError(error, (data) => Object.assign(errors, data.errors))
          );
        console.log(res);
        router.back();
      }
    };

    return () => (
      <Form onSubmit={onSubmit}>
        <FormItem
          label="标签名（最多4个字符）"
          type="text"
          v-model={formData.name}
          error={errors["name"] ? errors["name"]?.[0] : "　"}
        ></FormItem>
        <FormItem
          label={"符号 " + formData.sign}
          type="emojiSelect"
          v-model={formData.sign}
          error={errors["sign"] ? errors["sign"][0] : "　"}
        ></FormItem>
        <FormItem>
          <p class={s.tips}>记账时长按标签即可进行编辑</p>
        </FormItem>
        <FormItem>
          <Button type="submit" class={[s.formItem, s.button]}>
            确定
          </Button>
        </FormItem>
      </Form>
    );
  },
});
