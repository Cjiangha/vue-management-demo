<template>
  <div>
    <el-button type="text" @click="detailVisible = true"
      >点击打开 Dialog</el-button
    >
    <Dialag  :visible.sync="detailVisible" />
  </div>
</template>

<script>
import Dialag from './DialagComponent'
export default {
  components:{
    Dialag
  },
  data() {
    return {
      detailVisible: false,
    };
  },
  methods: {
   
  },
};
</script>