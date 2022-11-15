import Mock from 'mockjs'
export default {
  /*
    请求的参数
        username === 'admin' && password === 'admin'
        username === 'xiaoxiao' && password === 'xiaoxiao'
    返回的参数
    成功
    {
        code: 20000,
        data: {
          menu: [
            {
              path: '/',
              name: 'home',
              label: '首页',
              icon: 's-home',
              url: 'Home/Home'
            },
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    失败
     {
        code: -999,
        data: {
                message: '密码错误'
      }
     }
  */
  getMenu: config => {
    const {
      username,
      password
    } = JSON.parse(config.body)
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 20000,
        data: {
          menu: [{
              path: '/home',
              name: 'home',
              label: '首页',
              icon: 's-home',
              url: 'Home/Home'
            },
            {
              path: '/mall',
              name: 'mall',
              label: '商品管理',
              icon: 'video-play',
              url: 'Mall/Mall'
            },
            {
              path: '/user',
              name: 'user',
              label: '用户管理',
              icon: 'user',
              url: 'User/User'
            },
            {
              label: '其他',
              icon: 'location',
              name:'other',
              children: [{
                  path: '/PageOne',
                  name: 'PageOne',
                  label: '页面1',
                  icon: 'setting',
                  url: 'Other/PageOne'
                },
                {
                  path: '/echatTest',
                  name: 'echatTest',
                  label: 'Echat-Test',
                  icon: 'setting',
                  url: 'Other/echatTest'
                }
              ]
            },
            
            {
              label: 'Form',
              icon: '',
              name:'Form',
              children: [
                {
                  path: '/TimePicker',
                  name: 'TimePicker 时间选择器',
                  label: 'TimePicker',
                  icon: 'setting',
                  url: 'elementDemo/Form/TimePicker/index'
                },
                {
                  path: '/DatePicker',
                  name: 'DatePicker 日期选择器',
                  label: 'DatePicker 日期选择器',
                  icon: 'setting',
                  url: 'elementDemo/Form/DatePicker/index'
                },
                {
                  path: '/DateTimePicker',
                  name: 'DateTimePicker 日期时间选择器',
                  label: 'DateTimePicker',
                  icon: 'setting',
                  url: 'elementDemo/Form/DateTimePicker/index'
                }
              ],

            },
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else if (username === 'xiaoxiao' && password === 'xiaoxiao') {
      return {
        code: 20000,
        data: {
          menu: [{
              path: '/home',
              name: 'home',
              label: '首页',
              icon: 's-home',
              url: 'Home/Home'
            },
            {
              path: '/video',
              name: 'video',
              label: '商品管理',
              icon: 'video-play',
              url: 'VideoManage/VideoManage'
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '密码错误'
        }
      }
    }

  }
}