import { Overlay } from "vant";
import { defineComponent, PropType, reactive, ref } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { Time } from "../../shared/time";
import s from "./ItemList.module.scss";
import { ItemSummary } from "./ItemSummary";
export const ItemList = defineComponent({
  setup: (props, context) => {
    const refSelected = ref("本月");
    const onUpdateSelected = (name: string) => (refSelected.value = name);

    const time = new Time();
    const timeList = [
      { start: time.firstDayOfMount(), end: time.lastDayOfMount() },
      {
        start: time.add(-1, "month").firstDayOfMount(),
        end: time.add(-1, "month").lastDayOfMount(),
      },
      {
        start: time.firstDayOfYear(),
        end: time.lastDayOfYear(),
      },
    ];
    const customTime = reactive([
      {
        start: new Time(),
        end: new Time(),
      },
    ]);
    const refOverlayVisible = ref(true);
    return () => (
      <MainLayout>
        {{
          title: () => "山竹记账",
          icon: () => <Icon name="menu" />,
          default: () => (
            // <Tabs v-model:selected={refSelected.value} classPrefix="lihao">
            <>
            <Tabs
              selected={refSelected.value}
              onUpdateSelected={onUpdateSelected}
              class={s.tabs}
              classPrefix="customTabs"
            >
              <Tab name="本月">
                <ItemSummary
                  startDate={timeList[0].start.format()}
                  endDate={timeList[0].end.format()}
                />
              </Tab>
              <Tab name="上月">
                <ItemSummary
                  startDate={timeList[1].start.format()}
                  endDate={timeList[1].end.format()}
                />
              </Tab>
              <Tab name="今年">
                <ItemSummary
                  startDate={timeList[2].start.format()}
                  endDate={timeList[2].end.format()}
                />
              </Tab>
              <Tab name="自定义时间">
                <ItemSummary
                  startDate={customTime[0].start.format()}
                  endDate={customTime[0].end.format()}
                />
              </Tab>
            </Tabs>
            <Overlay show={refOverlayVisible.value} class={s.overlay}>
              <div class={s.overlay_inner}>
                <header>请选择时间</header>
              </div>
            </Overlay>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
