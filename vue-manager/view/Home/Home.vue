<template>
  <div>
    <el-row class="home">
      <el-col :span="24" style="margin-bottom: 10px">
      </el-col>
      <el-col :span="8" style="margin-top: 20px">
        <el-card shadow="hover">
          <div class="user">
            <!-- <img src="../../src/assets/images/user.png" /> -->
            <img :src="userImage" />
            <div class="userinfo">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div>
            <div class="login-info">
              <p><span>上次登录的时间</span><span>2022/5/2 17:33</span></p>
              <p><span>上次登录的地点</span><span>广州</span></p>
            </div>
          </div>
        </el-card>
        <el-card style="margin-top: 20px; height: 460px">
          <el-table :data="tableData">
            <el-table-column
              v-for="(val, key) in tableLabel"
              :key="key"
              :prop="key"
              :label="val"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col style="margin-top: 20px" :span="16">
        <div class="num">
          <el-card
            v-for="item in countData"
            :key="item.name"
            :body-style="{ display: 'flex', padding: 0 }"
          >
            <i
              class="icon"
              :class="`el-icon-${item.icon}`"
              :style="{ background: item.color }"
            ></i>
            <div class="detail">
              <p class="num">￥{{ item.value }}</p>
              <p class="txt">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-card style="height: 280px">
        <!-- <div style="height: 280px" ref="echarts"></div> -->
        <echart :chart-data="chartData.linechart" :is-axis-chart="true" style="height:280px;"></echart>
      </el-card>
      <div class="graph">
        <el-card style="height: 260px">
          <div style="height: 260px" ref="userEcharts"></div>
        </el-card>
        <el-card style="height: 260px">
          <div style="height: 260px" ref="videoEcharts"></div>
        </el-card>
      </div>

      <!-- <el-col :span="16"
        ><div class="grid-content bg-purple-light">
          <el-row class="home-right-top"> </el-row>
          <el-row class="home-right-middle"> </el-row>
          <el-row class="home-right-bottom">
            <el-col :span="12"></el-col>
            <el-col :span="12"></el-col>
          </el-row></div
      ></el-col> -->
    </el-row>
  </div>
</template>

<script>
// import CommonAside from "../../src/components/CommonAside.vue";
import { getData } from "../../api/data.js";
import * as echarts from "echarts";
import echart from "../../src/components/echart.vue";

export default {
  data() {
    return {
      tableData: [],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      chartData: {
        linechart:{
           xData: [],
           series: [],
        },
      },
      userImage: require("../../src/assets/images/user.png"),
    };
  },
  components: {
    echart,
  },
  mounted() {
    getData().then((res) => {
      const { code, data } = res.data;
      if (code === 20000) {
        // 订单支付金额
        this.tableData = data.tableData;
        // console.log("--data--", data);
        // 折线图
        const order = data.orderData;
        const keyArray = Object.keys(order.data[0]);
        const series = [];
        keyArray.forEach((key) => {
          series.push({
            name: key,
            /* 两种写法
            order.data.map((item) => {return item[key]}),
            order.data.map((item) => item[key]),
            */
            data: order.data.map((item) => {
              return item[key];
            }),
            type: "line",
          });
        });
    
        //折现图
        const xData = order.date;
        // console.log("---series---", series);
        // console.log("---xData---", xData);
        this.chartData.linechart.xData = xData;
        // console.log(this.chartData.linechart)
        this.chartData.linechart.series = series;
        // console.log(this.chartData);
        // const options = {
        //   xAxis: {
        //     data: xData,
        //   },
        //   yAxis: {},
        //   legend: {
        //     data: keyArray,
        //   },
        //   series,
        // };
        // const E = echarts.init(this.$refs.echarts);
        // E.setOption(options);

        // 柱形图
        const userData = data.userData;
        const userOption = {
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
            data: userData.map((item) => item.date),
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
          series: [
            {
              name: "新增用户",
              data: data.userData.map((item) => item.new),
              type: "bar",
            },
            {
              name: "活跃用户",
              data: data.userData.map((item) => item.active),
              type: "bar",
            },
          ],
        };

        const F = echarts.init(this.$refs.userEcharts);
        F.setOption(userOption);

        //饼图
        const videoOption = {
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
          series: [
            {
              data: data.videoData,
              type: "pie",
            },
          ],
        };

        const G = echarts.init(this.$refs.videoEcharts);
        G.setOption(videoOption);
      }
    });
  },
};
</script>

<style lang="less">
// @import '../';
</style>