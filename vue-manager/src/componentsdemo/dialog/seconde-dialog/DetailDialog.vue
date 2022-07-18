<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="innerVisible"
      width="30%"
      :before-close="toggle(visible)"
      append-to-body
      close="test"
    >
      <span>这是一段信息</span>
      {{ innerVisible }}
      <span slot="footer" class="dialog-footer">
        <el-button @click="toggle">取 消</el-button>
        <el-button type="primary" @click="toggle">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  model: {
    prop: "visible", // 修改 v-model 绑定的props名称
    event: "toggle", // 修改 v-model 绑定的自定义事件名
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    innerVisible: {
      get: function () {
        return this.visible;
      },
      set: function (val) {
        this.$emit("update:toggle", val);
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    toggle(val) {
       console.log("我是关闭啊啊啊");
      this.$emit("update:toggle", val);
    },
    // test() {
    //   console.log("我是关闭啊啊啊");
    // },
  },
};
</script>