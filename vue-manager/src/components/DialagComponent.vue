<template>
  <div>
    <el-button type="text" @click="outerVisible = true"
      >点击打开外层 Dialog</el-button
    >

    <el-dialog title="外层 Dialog" :visible.sync="outerVisible" append-to-body>
      <el-dialog
        width="30%"
        title="内层 Dialog"
        :visible.sync="innerVisible"
        append-to-body
      >
      </el-dialog>
      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button type="primary" @click="innerVisible = true"
          >打开内层 Dialog</el-button
        >
      </div>
    </el-dialog>
  </div>

  <!-- <el-dialog :visible.sync="currentShow"></el-dialog> -->
</template>

<script>
// export default {
//   props:['show'],
//   computed:{
//       currentShow:{
//           get(){
//               return this.show
//           },
//           set(val){
//               this.$emit("update:show",val)
//           }
//       }
//   }
// }
export default {
  data() {
    return {
      outerVisible: false,
      innerVisible: false,
    };
  },
};
</script>