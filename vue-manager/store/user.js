import Cookies from "js-Cookies";

export default {
  state: {
    token: "",
  },
  mutation: {
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
