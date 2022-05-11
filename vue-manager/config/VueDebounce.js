// 防抖
export default function debounce(fn, time) {
    time = time || 200
    // 定时器
    let timer = null
    return function(...args) {
      var _this = this
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(function() {
          console.log('time---',)
        timer = null
        fn.apply(_this, args)
      }, time)
    }
  }