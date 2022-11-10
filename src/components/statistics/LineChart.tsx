import { defineComponent, onMounted, PropType, ref, watch } from "vue";
import * as echarts from "echarts";
import s from "./LineChart.module.scss";
import { Time } from "../../shared/time";
import { getMoney } from "../../shared/Money";

const echartsOption = {
  tooltip: {
    show: true,
    trigger: "axis",
    formatter: ([item]: any) => {
      const [x, y] = item.data;
      return `${new Time(new Date(x)).format("YYYY年MM月DD日")} ￥${getMoney(
        y
      )}`;
    },
  },
  grid: [{ left: 16, top: 20, right: 16, bottom: 20 }],
  xAxis: {
    type: "time",
    boundaryGap: ["3%", "0%"],
    axisLabel: {
      formatter: (value: string) => new Time(new Date(value)).format("MM-DD"),
    },
    axisTick: {
      alignWithLabel: true,
    },
  },
  yAxis: {
    show: true,
    type: "value",
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed",
      },
    },
    axisLabel: {
      show: false,
    },
  },
};

export const LineChart = defineComponent({
  props: {
    data: {
      type: Array as PropType<[string, number][]>,
      required: true,
    },
  },
  setup: (props, context) => {
    const refLineChart = ref<HTMLDivElement>();
    let chart: echarts.ECharts;
    onMounted(() => {
      if (refLineChart.value === undefined) return;
      chart = echarts.init(refLineChart.value);

      chart.setOption({
        ...echartsOption,
        series: [
          {
            data: props.data,
            type: "line",
          },
        ],
      });
    });
    watch(
      () => props.data,
      () => {
        chart?.setOption({
          series: [
            {
              data: props.data,
            },
          ],
        });
      }
    );
    return () => <div ref={refLineChart} class={s.chart}></div>;
  },
});
