const state = {
  formData: [],
};

const mutations = {
  ADD_FORM_DATA(state, data) {
    state.formData.push(data);
  },
};

const actions = {
  addFormData({ commit }, data) {
    commit("ADD_FORM_DATA", data);
  },
};

const getters = {
  getFormData: (state) => state.formData,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
