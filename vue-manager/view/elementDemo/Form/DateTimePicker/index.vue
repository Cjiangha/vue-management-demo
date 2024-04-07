<template>
  <div class="chartNum">
    <h3 class="orderTitle">XX模块展示：</h3>
    <div class="box-item">
      <li
        :class="{ 'number-item': !isNaN(item), 'mark-item': isNaN(item) }"
        v-for="(item, index) in orderNum"
        :key="index"
      >
        <span v-if="!isNaN(item)">
          <i ref="numberItem" :myIndex="index" :myValue="item">0123456789</i>
        </span>
        <span class="comma" v-else>{{ item }}</span>
      </li>
    </div>
  </div>
</template>
 <script>
export default {
  props: {
    value: {
      type: Number, // 具体数值
      default() {
        return 50000;
      },
    },
    time: {
      type: Number, // 滚动要花的时间，单位秒
      default() {
        return 3;
      },
    },
  },
  data() {
    return {
      orderNum: ["0", "0", ",", "0", "0", "0", ",", "0", "0", "0"], // 默认订单总数
      newNumber: 50000,
    };
  },
  mounted() {
    this.toOrderNum(this.value); // 这里输入数字即可调用
    console.log("ggg", this.toOrderNum(this.value));
    this.increaseNumber(this.time);
  },
  methods: {
    // 定时增长数字
    increaseNumber(time) {
      let self = this;
      this.timer = setInterval(() => {
        self.newNumber = self.value + self.getRandomNumber(1, 100);
        console.log("self.newNumber", self.newNumber);
        self.setNumberTransform(self.newNumber);
      }, time * 1000);
    },
    // 设置文字滚动
    setNumberTransform(nowValue) {
      // 拿到数字的ref，计算元素数量 numberItems数组自身顺序有问题，需要处理成和数值保持一致
      const numberItems = this.$refs.numberItem;
      numberItems.sort((a, b) => {
        // 如果value相同，按照value的降序
        if (a.attributes.myIndex.value === b.attributes.myIndex.value) {
          return b.attributes.myIndex.value - a.attributes.myIndex.value;
        }
        return a.attributes.myIndex.value - b.attributes.myIndex.value;
      });
      //   console.log('numberItems',numberItems)

      // 在 template 里面加上 myIndex 和 myValue 属性，是因为有次发现，显示出来的结果不准确
      // 经排查，发现是 numberItems字段里面获取的 html元素顺序不对，所以重新给他排好序
      // 注意：numberItems字段里面获取的 html元素顺序不对 是偶尔发生的现象，但是为了安全起见，还是处理下

      //   const numberArr = this.orderNum.filter((item) => !isNaN(item));
      const numberArr = this.padZero(nowValue,8);
      // 结合CSS 对数字字符进行滚动,显示订单数量
      for (let index = 0; index < numberItems.length; index++) {
        const elem = numberItems[index];
        elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`;
      }
    },
    // 补零
    padZero(num, size) {
      let s = num.toString();
      while (s.length < size) {
        s = "0" + s;
      }
      return s;
    },

    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    // 处理传过来的具体值value
    toOrderNum(num) {
      num = num.toString();
      // 把具体值value变成字符串
      if (num.length < 8) {
        num = "0" + num; // 如未满八位数，添加"0"补位
        this.toOrderNum(num); // 递归添加"0"补位
      } else if (num.length === 8) {
        // 具体值value中加入逗号
        num = num.slice(0, 2) + "," + num.slice(2, 5) + "," + num.slice(5, 8);
        this.orderNum = num.split(""); // 将其便变成数据，渲染至滚动数组
      } else {
        // 具体值value数字超过八位显示异常
        this.$message.warning("xxx数量过大，显示异常，请联系后台管理员");
      }
      return num;
    },
  },
};
</script>
 <style scoped lang='less'>
/*具体值value总量滚动数字设置*/
.box-item {
  position: relative;
  height: 100px;
  font-size: 54px;
  line-height: 41px;
  text-align: center;
  list-style: none;
  color: #2d7cff;
  writing-mode: vertical-lr;
  text-orientation: upright;
  /*文字禁止编辑*/
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
  /* overflow: hidden; */
}
/* 默认逗号设置 */
.mark-item {
  width: 10px;
  height: 100px;
  margin-right: 5px;
  line-height: 10px;
  font-size: 48px;
  position: relative;
  & > span {
    position: absolute;
    width: 100%;
    bottom: 0;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
}
/*滚动数字设置*/
.number-item {
  width: 41px;
  height: 75px;
  background: #ccc;
  list-style: none;
  margin-right: 5px;
  background: rgba(250, 250, 250, 1);
  border-radius: 4px;
  border: 1px solid rgba(221, 221, 221, 1);
  & > span {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    width: 100%;
    height: 100%;
    writing-mode: vertical-rl;
    text-orientation: upright;
    overflow: hidden;
    & > i {
      font-style: normal;
      position: absolute;
      top: 11px;
      left: 50%;
      transform: translate(-50%, 0);
      transition: transform 0.3s ease-in-out;
      letter-spacing: 10px;
    }
  }
}
.number-item:last-child {
  margin-right: 0;
}
</style>