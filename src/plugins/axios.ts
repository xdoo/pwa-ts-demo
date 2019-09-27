import Axios from "axios";

/**
 * Stellt Axios als Prototype zur Verfügung. Der
 * Aufruf kann über 'this.$http.get(...)' erfolgen. 
 */
export default {
  install(Vue: any) {
    Vue.prototype.$http = Axios.create({
      baseURL: "httpbin.org",
      timeout: 30000,
      // hier könnte dann noch z.B. ein Bearer Token gesetzt werden, der
      // aus dem Local Storage kommt:
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem('access_token')}`
      // } 
    });
  }
};
