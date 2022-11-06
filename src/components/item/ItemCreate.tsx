import { defineComponent, PropType, ref } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { InputPad } from "./InputPad";
import s from "./ItemCreate.module.scss";
import { Tags } from "./Tags";
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<String>,
    },
  },
  setup: (props, context) => {
    const refkind = ref("支出");
    const onUpdateSelected = (name: string) => (refkind.value = name);
    return () => (
      <MainLayout class={s.layout}>
        {{
          title: () => "记一笔",
          icon: () => <Icon name="left" class={s.navIcon} />,
          default: () => (
            <div class={s.wrapper}>
              <Tabs
                selected={refkind.value}
                onUpdate:selected={onUpdateSelected}
                class={s.tabs}
              >
                {/* <Tabs v-model:selected={refkind.value}> */}
                <Tab name="支出">
                  <Tags kind="expenses" />
                </Tab>
                <Tab name="收入">
                  <Tags kind="income" />
                </Tab>
              </Tabs>
              <div class={s.inputPad_wrapper}>
                <InputPad></InputPad>
              </div>
            </div>
          ),
        }}
      </MainLayout>
    );
  },
});
