import axios from "./axios";

//登录的接口
export const getMenu = (param)=>{
    return axios.request({
        url:'/permission/getMenu',
        methods:'post',
        data:param
    })
}

//查询表格数据
export const getData = ()=>{
    return axios.request({
        url:'/home/getData',
        method: 'get'
    })
}

//查询用户
export const getUser = (params)=>{
    return axios.request({
        url: '/user/getUser',
        method: 'get',
        params
    })
}

//删除用户
export const delUser = (params)=>{
    return axios.request({
        url: '/user/del',
        method: 'post',
        params
    })
}
