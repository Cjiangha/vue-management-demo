
//父组件
<template>
  <div class="home">
    {{ originStr }}
   第一种写法
  <!--  <hello-world :message="originStr" @update:message="changeMessage" />  -->
  第二种写法(.sync语法糖的写法)
 <hello-world :message.sync="originStr" />
  </div>
</template>
<script>
// 参考下文章：https://blog.csdn.net/u010227042/article/details/125299122


// @ is an alias to /src
import HelloWorld from "./HelloWorld.vue";
 
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      originStr: "你好",
    };
  },
  methods: {
    changeMessage(str) {
      console.log(str);
      this.originStr = str;
    },
  },
};
</script>
