import { defineComponent, onMounted, PropType, ref } from "vue";
import * as echarts from "echarts";
import s from "./PieChart.module.scss";
export const PieChart = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const refPieChart = ref<HTMLDivElement>();
    onMounted(() => {
      if (refPieChart.value === undefined) return;
      const myChart = echarts.init(refPieChart.value);
      const option = {
        grid: [{ left: 0, top: 0, right: 0, bottom: 20 }],
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      option && myChart.setOption(option);
    });
    return () => <div ref={refPieChart} class={s.chart}></div>;
  },
});
