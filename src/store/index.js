import Vue from "vue";
import Vuex from "vuex";
import formData from "./formdata";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    formData,
  },
});
