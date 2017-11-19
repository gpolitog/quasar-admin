import api from 'api/humanResource/employees';

export default {
  namespaced: true,
  state: {
    all: [],
  },
  mutations: {
    setAll(state, data) {
      state.all = data;
    },
  },
  actions: {
    async getAll({ commit }) {
      const data = await api.getAll();

      commit('setAll', data);
    },
  },
};
