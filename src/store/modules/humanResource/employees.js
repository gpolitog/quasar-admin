import deepFreeze from 'deep-freeze';

import api from 'api/humanResource/employees';

export default {
  namespaced: true,
  state: {
    data: null,
  },
  mutations: {
    setData(state, data) {
      state.data = deepFreeze(data);
    },
  },
  actions: {
    async getData({ commit }) {
      const data = await api.getData();

      commit('setData', data);
    },
  },
};
