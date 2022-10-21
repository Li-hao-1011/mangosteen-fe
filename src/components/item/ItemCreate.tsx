import { defineComponent, PropType, ref } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { InputPad } from "./InputPad";
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
    const refExpensesTags = ref([
      { id: 1, name: "餐费", sign: "￥", category: "expenses" },
      { id: 2, name: "打车", sign: "￥", category: "expenses" },
      { id: 3, name: "聚餐", sign: "￥", category: "expenses" },
      { id: 4, name: "游玩", sign: "￥", category: "expenses" },
      { id: 5, name: "网吧", sign: "￥", category: "expenses" },
      { id: 1, name: "餐费", sign: "￥", category: "expenses" },
      { id: 2, name: "打车", sign: "￥", category: "expenses" },
      { id: 3, name: "聚餐", sign: "￥", category: "expenses" },
      { id: 4, name: "游玩", sign: "￥", category: "expenses" },
      { id: 5, name: "网吧", sign: "￥", category: "expenses" },
      { id: 1, name: "餐费", sign: "￥", category: "expenses" },
      { id: 2, name: "打车", sign: "￥", category: "expenses" },
      { id: 3, name: "聚餐", sign: "￥", category: "expenses" },
      { id: 4, name: "游玩", sign: "￥", category: "expenses" },
      { id: 5, name: "网吧", sign: "￥", category: "expenses" },
      { id: 1, name: "餐费", sign: "￥", category: "expenses" },
      { id: 2, name: "打车", sign: "￥", category: "expenses" },
      { id: 3, name: "聚餐", sign: "￥", category: "expenses" },
      { id: 4, name: "游玩", sign: "￥", category: "expenses" },
      { id: 5, name: "网吧", sign: "￥", category: "expenses" },
      { id: 1, name: "餐费", sign: "￥", category: "expenses" },
      { id: 2, name: "打车", sign: "￥", category: "expenses" },
      { id: 3, name: "聚餐", sign: "￥", category: "expenses" },
      { id: 4, name: "游玩", sign: "￥", category: "expenses" },
      { id: 5, name: "网吧", sign: "￥", category: "expenses" },
      { id: 1, name: "餐费", sign: "￥", category: "expenses" },
      { id: 2, name: "打车", sign: "￥", category: "expenses" },
      { id: 3, name: "聚餐", sign: "￥", category: "expenses" },
      { id: 4, name: "游玩", sign: "￥", category: "expenses" },
      { id: 5, name: "网吧", sign: "￥", category: "expenses" },
      { id: 1, name: "餐费", sign: "￥", category: "expenses" },
      { id: 2, name: "打车", sign: "￥", category: "expenses" },
      { id: 3, name: "聚餐", sign: "￥", category: "expenses" },
      { id: 4, name: "游玩", sign: "￥", category: "expenses" },
      { id: 5, name: "网吧", sign: "￥", category: "expenses" },
      { id: 1, name: "餐费", sign: "￥", category: "expenses" },
      { id: 2, name: "打车", sign: "￥", category: "expenses" },
      { id: 3, name: "聚餐", sign: "￥", category: "expenses" },
      { id: 4, name: "游玩", sign: "￥", category: "expenses" },
      { id: 5, name: "网吧", sign: "￥", category: "expenses" },
      { id: 1, name: "餐费", sign: "￥", category: "expenses" },
      { id: 2, name: "打车", sign: "￥", category: "expenses" },
      { id: 3, name: "聚餐", sign: "￥", category: "expenses" },
      { id: 4, name: "游玩", sign: "￥", category: "expenses" },
      { id: 5, name: "网吧", sign: "￥", category: "expenses" },
      { id: 1, name: "餐费", sign: "￥", category: "expenses" },
      { id: 2, name: "打车", sign: "￥", category: "expenses" },
      { id: 3, name: "聚餐", sign: "￥", category: "expenses" },
      { id: 4, name: "游玩", sign: "￥", category: "expenses" },
      { id: 5, name: "网吧", sign: "￥", category: "expenses" },
      { id: 1, name: "餐费", sign: "￥", category: "expenses" },
      { id: 2, name: "打车", sign: "￥", category: "expenses" },
      { id: 3, name: "聚餐", sign: "￥", category: "expenses" },
      { id: 4, name: "游玩", sign: "￥", category: "expenses" },
      { id: 5, name: "网吧", sign: "￥", category: "expenses" },
      { id: 1, name: "餐费", sign: "￥", category: "expenses" },
      { id: 2, name: "打车", sign: "￥", category: "expenses" },
      { id: 3, name: "聚餐", sign: "￥", category: "expenses" },
      { id: 4, name: "游玩", sign: "￥", category: "expenses" },
      { id: 5, name: "网吧", sign: "￥", category: "expenses" },
      { id: 1, name: "餐费", sign: "￥", category: "expenses" },
      { id: 2, name: "打车", sign: "￥", category: "expenses" },
      { id: 3, name: "聚餐", sign: "￥", category: "expenses" },
      { id: 4, name: "游玩", sign: "￥", category: "expenses" },
      { id: 5, name: "网吧", sign: "￥", category: "expenses" },
    ]);
    const reIncomeTags = ref([
      { id: 5, name: "游玩", sign: "￥", category: "income" },
      { id: 6, name: "餐费", sign: "￥", category: "income" },
      { id: 7, name: "打车", sign: "￥", category: "income" },
      { id: 8, name: "聚餐", sign: "￥", category: "income" },
    ]);
    return () => (
      <MainLayout>
        {{
          title: () => "记一笔",
          icon: () => <Icon name="left" class={s.nav_icon} />,
          default: () => (
            <div class={s.wrapper}>
              <Tabs
                selected={refkind.value}
                onUpdateSelected={onUpdateSelected}
                class={s.tabs}
              >
                {/* <Tabs v-model:selected={refkind.value}> */}
                <Tab name="支出" class={s.tags_wrapper}>
                  <div class={s.tag}>
                    <div class={s.sign}>
                      <Icon name="add" class={s.createTag} />
                    </div>
                    <div class={s.name}>新增</div>
                  </div>
                  {refExpensesTags.value.map((tag) => (
                    <div class={[s.tag, s.selected]}>
                      <div class={s.sign}>{tag.sign}</div>
                      <div class={s.name}>{tag.name}</div>
                    </div>
                  ))}
                </Tab>
                <Tab name="收入" class={s.tags_wrapper}>
                  <div class={s.tag}>
                    <div class={s.sign}>
                      <Icon name="add" class={s.createTag} />
                    </div>
                    <div class={s.name}>新增</div>
                  </div>
                  {reIncomeTags.value.map((tag) => (
                    <div class={[s.tag, s.selected]}>
                      <div class={s.sign}>{tag.sign}</div>
                      <div class={s.name}>{tag.name}</div>
                    </div>
                  ))}
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
