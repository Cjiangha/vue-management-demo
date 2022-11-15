<template>
  <div class="DatePicker">
    我是日期选择器
    <h1>选项卡 点击正方形 切换 div</h1>
    <ul class="change">
      <li
        class="pd cursor"
        @mousemove="changecurId(item.curId)"
        v-for="(item, index) in changeDatas"
        :key="index"
      >
        <h4 class="title-index">选项{{ item.curId }}</h4>
        <span class="choice">{{ item.title }} </span>
      </li>
    </ul>

    <div class="NO1" v-show="curId === changeDatas[0].curId">
      <h1>Title: {{ changeDatas[0].title }}</h1>
    </div>
    <div class="NO2" v-show="curId === changeDatas[1].curId">
      <h1>Title:{{ changeDatas[1].title }}</h1>
    </div>
    <div class="NO3" v-show="curId === changeDatas[2].curId">
      <h1>Title:{{ changeDatas[2].title }}</h1>
    </div>
    <div class="NO4" v-show="curId === changeDatas[3].curId">
      <h1>Title:{{ changeDatas[3].title }}</h1>
    </div>
    <!-- <div class="NO5" v-show="curId === changeDatas[4].curId">
      <h1>Title:{{changeDatas[4].title}}</h1>
    </div>
    <div class="NO6" v-show="curId === changeDatas[5].curId">
      <h1>Title:{{changeDatas[5].title}}</h1>
    </div> -->
  </div>
</template>

<script>
/*组件*/
// import SelectDay from "./components/SelectDay";
// import OtherDate from "./components/OtherDate";
// import ChoiceDayRange from "./components/ChoiceDayRange";
// import ChoiceMonthRange from "./components/ChoiceMonthRange";
// import ShowDateDefault from "./components/ShowDateDefault";
// import DateFormat from "./components/DateFormat"

/* 封装的功能 */
import debounce from "../../../../config/VueDebounce.js"; //防抖

export default {
  components: {},
  data() {
    return {
      curId: 1,
      changeDatas: [
        { title: "固定时间点", curId: 1 },
        { title: "任意时间点", curId: 2 },
        { title: "固定时间范围", curId: 3 },
        { title: "任意时间范围", curId: 4 },
        // { title: "日期格式", curId: 5 },
        // { title: "默认显示日期", curId: 6 },
      ],
    };
  },
  methods: {
    // changecurId(index) {
    //   this.curId = index;
    // },

    // 改成防抖
    changecurId: debounce(async function (index) {
        console.log(1)
      this.curId = index;
    }, 10),
  },
};
</script>
<style lang="less" scoped>
.DatePicker {
  .change {
    display: flex;
    li {
      border: 1px solid red;
      background: palegreen;
      text-align: center;
      line-height: 20px;
      list-style-type: none;
      width: auto;
      height: auto;
    }
    li:hover {
      background-color: red;
      color: white;
    }
  }
}
</style>