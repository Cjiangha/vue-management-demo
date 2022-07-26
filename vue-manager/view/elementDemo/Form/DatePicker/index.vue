<template>
  <div class="DatePicker">
    <h1>选项卡 点击正方形 切换 div</h1>
    <ul class="change">
      <li class="pd cursor" @click="curId = 1">
        <h4 class="title-index">选项1</h4>
        <span class="choice">固定时间点 </span>
      </li>
      <li class="pd cursor" @click="curId = 2">
        <h4 class="title-index">选项2</h4>
        <span class="choice">其他日期单位</span>
      </li>
      <li class="pd cursor" @click="curId = 3">
        <h4 class="title-index">选项3</h4>
        <span class="choice">选择日期范围</span>
      </li>
      <li class="pd cursor" @click="curId = 4">
        <h4 class="title-index">选项4</h4>
        <span class="choice">选择月份范围</span>
      </li>
      <li class="pd cursor" @click="curId = 5">
        <h4 class="title-index">选项5</h4>
        <span class="choice">日期格式</span>
      </li>
      <li class="pd cursor" @click="curId = 6">
        <h4 class="title-index">选项6</h4>
        <span class="choice">默认显示日期</span>
      </li>
    </ul>

    <div class="NO1" v-show="curId === 1">
      <h1>Title: 固定时间点</h1>
      <Select-day />
    </div>
    <div class="NO2" v-show="curId === 2">
      <h1>Title:其他日期单位</h1>
      <Other-date />
    </div>
    <div class="NO3" v-show="curId === 3">
      <h1>Title:选择日期范围</h1>
      <ChoiceDayRange />
    </div>
    <div class="NO4" v-show="curId === 4">
      <h1>Title:选择月份范围</h1>
      <ChoiceMonthRange />
    </div>
    <div class="NO5" v-show="curId === 5">
      <h1>Title:日期格式</h1>
      <DateFormat />
    </div>
    <div class="NO6" v-show="curId === 6">
      <h1>Title:默认显示日期</h1>
      <ShowDateDefault />
    </div>
  </div>
</template>

<script>
import SelectDay from "./components/SelectDay";
import OtherDate from "./components/OtherDate";
import ChoiceDayRange from "./components/ChoiceDayRange";
import ChoiceMonthRange from "./components/ChoiceMonthRange";
import ShowDateDefault from "./components/ShowDateDefault";
import DateFormat from "./components/DateFormat"

export default {
  components: {
    SelectDay,
    OtherDate,
    ChoiceDayRange,
    ChoiceMonthRange,
    ShowDateDefault,
    DateFormat
  },
  data() {
    return {
      curId: 1,
    };
  },
  methods: {},
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