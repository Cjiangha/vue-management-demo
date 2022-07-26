<template>
  <div class="otherDate">
    <div class="container">
      <div class="block">
        <span class="demonstration">周</span>
        <el-date-picker
          v-model="value1"
          type="week"
          format="yyyy 第 WW 周"
          placeholder="选择周"
        >
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">月</span>
        <el-date-picker v-model="value2" type="month" placeholder="选择月">
        </el-date-picker>
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">年</span>
        <el-date-picker v-model="value3" type="year" placeholder="选择年">
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demons tration">多个日期</span>
        <el-date-picker
          type="dates"
          v-model="value4"
          placeholder="选择一个或多个日期"
        >
        </el-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
    };
  },
};
</script>