/*
 * @Author: Cjiangha 445620536@qq.com
 * @Date: 2022-04-28 00:42:06
 * @LastEditors: Cjiangha 445620536@qq.com
 * @LastEditTime: 2022-05-07 03:37:23
 * @FilePath: \vue-element-bilibili\vue-manager\babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ],
}