<template>
  <div class="DatePicker">
    选项卡 点击正方形 切换 div
    <ul class="change">
      <li @click="curId = 1" >选项1</li>
      <li @click="curId = 2" >选项2</li>
      <li @click="curId = 3" >选项3</li>
    </ul>

    <div class="NO1" v-show="curId === 1">
        <h1>Title:第一</h1>
        <select-day />

    </div>
    <div class="NO2" v-show="curId === 2">
         <h1>Title:第二</h1>
          <other-date />
    </div>
    <div class="NO3" v-show="curId === 3"><h1>Title:第三</h1></div>

    固定时间点
  </div>
</template>

<script>
import selectDay from './components/selectDay'
import otherDate from './components/otherDate'
export default {
    components:{
        selectDay,
        otherDate
    },
    data(){
        return{
            curId:1
        }
    },
    methods:{
    }
};
</script>
<style lang="less" scoped>
.DatePicker {
  .change {
      display: flex;
    li {
      width: 100px;
      height: 20px;
      border: 1px solid red;
      text-align: center;
      line-height: 20px;
    }
  }
}

</style>