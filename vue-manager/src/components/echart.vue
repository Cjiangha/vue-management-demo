<template>
  <div ref="echart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: {
    // 定义是饼状图 还是 折线图 / 柱形图
    isAxisChart: {
      type: Boolean,
      default: true,
    },
    // series是echart 用来定义数据集的，可以在 series.data 中设置数据
    // ECharts4 支持 数据集 开始，更推荐使用 数据集 来管理数据。即 数据集（dataset）
    // xData 是 x 轴  xAxis 的数据
    // 所以 chartData 是props 传递的数据 到这
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: [],
        };
      },
    },
  },
  data() {
    return {
      axisOption: {
        legend: {
          //图例的文字颜色
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "20%",
        },
        // 提示框
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category", // 类目轴
          data: [],
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: ["#2ec7c9", "#b6a2de"],
        // 控制柱形图的相关参数
        series: [],
      },
      normalOption: {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [],
      },
      echart: null,
    };
  },

  watch: {
    chartData: {
      handler: function () {
        this.initChart();
      },
      deep: true,
    },
  },
  methods: {
        /*
            设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过 
            setOption 完成，ECharts 会合并新的参数和数据，然后刷新图表。如果开启动
            画的话，ECharts 找到两组数据之间的差异然后通过合适的动画去表现数据的变化。
        */
    initChart() {
      this.initChartData();
      if (this.echart) {
        this.echart.setOption(this.option);
      } else {
        //if echart == null 执行 画出折现图
        this.echart = echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    // 初始化的 options相关数据
    initChartData() {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData;
        this.axisOption.series = this.chartData.series;
      } else {
        this.normalOption.series = this.chartData;
      }
    },
  },
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption;
    },
  },
};
</script>