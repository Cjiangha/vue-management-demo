
<template>
  <div>
    <!-- 新增、修改都可以用同一个弹窗 用一个变量去控制 -->
    <el-dialog
      title="提示"
      width="30%"
      append-to-body
      :visible.sync="visible"
      @close="onClose"
    >
      <!-- {{ visible }} -->


          <!-- 新增内容 -->
      <!-- 是否费改可以任意的修改 -->

            <!-- 修改内容 -->
      <!-- 是否费改 被禁用 -->
      <!--  -->
      <!--  -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="onClose">onClose</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// 转自 ： https://blog.csdn.net/qq_39352650/article/details/124862545
export default {
  data() {
    return {};
  },
  model: {
    prop: "visible", // 修改 v-model 绑定的props名称
    event: "closeModal", // 修改 v-model 绑定的自定义事件名
  },
  props: {
    visible: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {};
  },
  created() {
  },
  methods: {
    onClose() {
      this.$emit("close");
      // 修改model中的值
      this.$emit("closeModal", false);
    },
  },
};
</script>