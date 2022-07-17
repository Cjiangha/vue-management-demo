
// 子组件
<template>
  <div class="hello">
    <hr />
    <button @click="btnclick">兄弟点我</button>
  </div>
</template>
 
<script>
export default {
  name: "HelloWorld",
  components: {},
  props: {
    message: {
      type: String,
      default: "",
    },
  },
  methods: {
    btnclick() {
      console.log("触发了事件");
      this.$emit("update:message", "Hello World");
    },
  },
};
</script>
 
<style scoped lang="scss"></style>