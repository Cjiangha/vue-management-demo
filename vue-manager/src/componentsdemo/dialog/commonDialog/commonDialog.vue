<template>
  <div>
    <el-button type="primary" @click="detailVisible = true"
      >点击打开 Dialog</el-button
    >
    <DetailDialog v-model="detailVisible" />
  </div>
</template>
<script>
import DetailDialog from "./DetailDialog.vue";
export default {
  components: {
    DetailDialog,
  },
  data() {
    return {
      detailVisible: false,
    };
  },
};
</script>