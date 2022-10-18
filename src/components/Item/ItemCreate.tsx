import { defineComponent, PropType, ref } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import s from "./ItemCreate.module.scss";
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
      <MainLayout>
        {{
          title: () => "记一笔",
          icon: () => <Icon name="left" class={s.nav_icon} />,
          default: () => (
            // 两种方法
            <Tabs selected={refkind.value} onUpdateSelected={onUpdateSelected}>
              {/* <Tabs v-model:selected={refkind.value}> */}
              <Tab name="支出">icon 列表</Tab>
              <Tab name="收入">icon 列表2</Tab>
            </Tabs>
          ),
        }}
      </MainLayout>
    );
  },
});
