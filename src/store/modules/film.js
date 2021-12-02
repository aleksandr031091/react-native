import { getAllFilms } from "../../services/swapiDev";

export default {
  actions: {
    async getAllFilmsAction(ctx) {
      try {
        const films = await getAllFilms();
        ctx.commit("setAllFilms", films.data.results);
      } catch (error) {
        ctx.commit("getError", error);
      }
    },
  },
  mutations: {
    setAllFilms(state, films) {
      state.films = films;
    },

    getError(state, error) {
      state.error = error;
    },
  },

  state: {
    films: [],
    error: "",
  },

  getters: {
    allFilms(state) {
      return state.films;
    },
  },
};
