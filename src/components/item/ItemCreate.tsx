import { defineComponent, onMounted, PropType, ref } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { http } from "../../shared/Http";
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
    onMounted(async () => {
      const res = await http.get<{ resources: Tag[] }>("/tags", {
        kind: "expenses",
        _mock: "tagIndex",
      });
      refExpensesTags.value = res.data.resources;
    });
    onMounted(async () => {
      const res = await http.get<{ resources: Tag[] }>("/tags", {
        kind: "income",
        _mock: "tagIndex",
      });
      reIncomeTags.value = res.data.resources;
    });
    const refkind = ref("支出");
    const onUpdateSelected = (name: string) => (refkind.value = name);
    const refExpensesTags = ref<Tag[]>([]);
    const reIncomeTags = ref<Tag[]>([]);
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
