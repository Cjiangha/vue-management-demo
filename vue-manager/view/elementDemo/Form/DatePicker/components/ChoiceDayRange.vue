<template>
  <div class="">
    <h2>
      在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用unlink-panels属性解除联动。
    </h2>
     <div class="flex">
      <div class="block pd">
        <span class="demonstration">默认</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
      <div class="block pd">
        <span class="demonstration">带快捷选项</span>
        <el-date-picker
          v-model="value2"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </div>
    </div>

    <div class="tips">
      <h2 >unlink-panels说明</h2>
      <p>不懂参考以下链接</p>
      <p >
         <a href="https://www.freesion.com/article/1513380460/">跳转的链接</a>
    
      </p>
      <p>
          把unlink-panels设置为 true 后，
      两个日期面板的联运行为消失。左右侧的日期可以随意更改。
      </p>
      <img
      class="pd"
        src="https://www.freesion.com/images/206/4bb5af3e3637074b7e03c4d113be672e.png"
      />
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: "",
      value2: "",
    };
  },
};
</script>