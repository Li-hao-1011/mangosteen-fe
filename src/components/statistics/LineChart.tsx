import { defineComponent, onMounted, PropType, ref } from "vue";
import * as echarts from "echarts";
import s from "./LineChart.module.scss";
export const LineChart = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const refLineChart = ref<HTMLDivElement>();
    onMounted(() => {
      console.log("init");

      if (refLineChart.value === undefined) return;
      const myChart = echarts.init(refLineChart.value);
      const option = {
        grid: [{ left: 0, top: 0, right: 0, bottom: 20 }],
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };

      option && myChart.setOption(option);
    });
    return () => <div ref={refLineChart} class={s.chart}></div>;
  },
});
