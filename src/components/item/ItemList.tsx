import { defineComponent, PropType, ref } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import s from "./ItemList.module.scss";
export const ItemList = defineComponent({
  props: {
    name: {
      type: String as PropType<String>,
    },
  },
  setup: (props, context) => {
    const refSelected = ref("本月");
    const onUpdateSelected = (name: string) => (refSelected.value = name);

    return () => (
      <MainLayout>
        {{
          title: () => "山竹记账",
          icon: () => <Icon name="menu" />,
          default: () => (
            // <Tabs v-model:selected={refSelected.value} classPrefix="lihao">

            <Tabs
              selected={refSelected.value}
              onUpdateSelected={onUpdateSelected}
              class={s.tabs}
              classPrefix="customTabs"
            >
              <Tab name="本月">本月</Tab>
              <Tab name="上月">上月</Tab>
              <Tab name="今年">今年</Tab>
              <Tab name="自定义">自定义</Tab>
            </Tabs>
          ),
        }}
      </MainLayout>
    );
  },
});
