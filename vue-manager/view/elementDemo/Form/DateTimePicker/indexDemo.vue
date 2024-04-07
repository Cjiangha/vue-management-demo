<template>
  <p class="box-item">
    <span>0123456789</span>
  </p>
</template>
<style>
.box-item {
  position: relative;
  display: inline-block;
  width: 54px;
  height: 82px;
  /* 背景图片 */
  /* background: url(./number-bg.png) no-repeat center center; */
  background: rgb(243, 157, 157);
  background-size: 100% 100%;
  font-size: 62px;
  line-height: 82px;
  text-align: center;
  box-sizing: border-box;
  /* border:4px #ccc solid; */
  
  writing-mode: vertical-lr;
  text-orientation: upright;
}
.box-item span {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  letter-spacing: 10px;
}
</style>