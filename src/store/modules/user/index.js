import api from 'api/user';

export default {
  namespaced: true,
  state: {
    isLoggedIn: false,
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
  },
  actions: {
    login: async function login({ commit }, form) {
      const success = await api.login(form);

      if (success) {
        commit('login');
      }

      return success;
    },
  },
};
