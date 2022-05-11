import Cookies from "js-Cookie";

export default {
  state: {
    token: "",
  },
  mutations: {
    //设置token
    setToken(state, val) {
      state.token = val;
      Cookies.set("token", val);
    },
    //清除token
    clearToken(state) {
      state.token = "";
      Cookies.remove("token");
    },
    //获取token
    getToken(state) {
      state.token = state.token || Cookies.get("token");
    },
  },
};
