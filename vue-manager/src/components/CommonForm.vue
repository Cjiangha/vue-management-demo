<template>
  <!-- input  switch date-picker select->option-->
  <el-form ref="form" :model="form" label-width="80px" :inline="inline">
    <el-form-item
      v-for="item in formLabel"
      :key="item.label"
      :label="item.label"
    >
      <el-input
        v-if="item.type === 'input'"
        :placeholder="`请输入${item.label}`"
        v-model="form[item.model]"
      >
      </el-input>

      <el-switch
        v-if="item.type === 'switch'"
        v-model="form[item.model]"
      ></el-switch>

      <el-date-picker
        v-if="item.type === 'date'"
        v-model="form[item.model]"
        value-format="yyyy-MM-dd"
        type="date"
        placeholder="选择日期"
        style="width: 100%"
      ></el-date-picker>

      <el-select
        v-if="item.type === 'select'"
        v-model="form[item.model]"
        placeholder="请选择"
      >
        <el-option
          v-for="item in item.opts"
          :key="item.label"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
        <slot></slot>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    formLabel: Array,
    form: Object,
    inline: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    onSubmit() {
      console.log("form", this.form);
    },
  },
};
</script>

<style lang="less" scoped>
</style>