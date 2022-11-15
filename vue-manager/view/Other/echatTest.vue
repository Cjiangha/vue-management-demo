<template>
  <div ref="myChart" style="width: 100%; height: 520px" id="myChart"></div>
</template>
<script>
/*   
  案例网址：
   https://echarts.apache.org/examples/zh/index.html#chart-type-line
*/
export default {
  methods: {
    getOption() {
      let base = +new Date(1968, 9, 3);
      let oneDay = 24 * 3600 * 1000;
      let date = [];
      let data = [Math.random() * 300];
      for (let i = 1; i < 20000; i++) {
        var now = new Date((base += oneDay));
        date.push(
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
        );
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
      }
      let option = {
        tooltip: {
          trigger: "axis",
          position: function (pt) {
            return [pt[0], "10%"];
          },
        },
        title: {
          left: "center",
          text: "Large Area Chart",
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            restore: {},
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: date,
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 10,
          },
          {
            start: 0,
            end: 10,
          },
        ],
        series: [
          {
            name: "Fake Data",
            type: "line",
            symbol: "none",
            sampling: "lttb",
            itemStyle: {
              color: "rgb(255, 70, 131)",
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 158, 68)",
                },
                {
                  offset: 1,
                  color: "rgb(255, 70, 131)",
                },
              ]),
            },
            data: data,
          },
        ],
      };
      return option;
    },

    setMyEchart() {
      const myChart = this.$refs.myChart; //通过ref获取到DOM节点
      if (myChart) {
        const thisChart = this.$echarts.init(myChart); //利用原型调取Echarts的初始化方法
        // const option = {
        //     title: {
        //       text: "ECharts 入门示例",
        //     },
        //     tooltip: {},
        //     legend: {
        //       data: ["销量"],
        //     },
        //     xAxis: {
        //       data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        //     },
        //     yAxis: {},
        //     series: [
        //       {
        //         name: "销量",
        //         type: "bar",
        //         data: [5, 20, 36, 10, 10, 20],
        //       },
        //     ],
        //   }; //{}内写需要图表的各种配置，可以在官方案例中修改完毕后复制过来
        const option = this.getOption();
        thisChart.setOption(option); //将编写好的配置项挂载到Echarts上
        window.addEventListener("resize", function () {
          thisChart.resize(); //页面大小变化后Echarts也更改大小
        });
      }
    },
  },
  mounted() {
    this.setMyEchart(); //页面挂载完成后执行
  },
};
</script>
