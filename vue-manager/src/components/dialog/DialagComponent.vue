<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="innerVisible"
      width="30%"
      :before-close="handleClose"
      append-to-body
    >
      <span>这是一段信息</span>
      {{innerVisible}}
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleClose">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return{
      close : false
    }
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
        this.$emit('update:visible', val)
      },
    },
  },
  data() {
    return {};
  },
  methods:{
    handleClose(val) {
      this.$emit('update:visible',false)
      // this.$confirm("确认关闭？")
      //   .then((_) => {
      //     done();
      //   })
      //   .catch((_) => {});
    },
  }
};
</script>