import Mock from 'mockjs'

import homeApi from './mockServerData/home'
import userApi from './mockServerData/user'
import permissionApi from './mockServerData/permission'
Mock.mock('/api/home/getData', homeApi.getStatisticalData)
// Mock.mock('/api/user/getUser', userApi.getUserList)


Mock.mock(/api\/user\/getUser/, 'get', userApi.getUserList)
// 权限相关
Mock.mock(/api\/permission\/getMenu/, 'post', permissionApi.getMenu)