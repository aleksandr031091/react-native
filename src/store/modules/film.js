export default {
  actions: {},
  mutations: {},

  state: {
    films: [],
  },

  getters: {
    getAllFilms(state) {
      return state.films;
    },
  },
};
