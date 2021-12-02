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

    setFilm(state, film) {
      state.film = film;
    },

    getError(state, error) {
      state.error = error;
    },
  },

  state: {
    films: [],
    film: {},
    error: "",
  },

  getters: {
    allFilms(state) {
      return state.films;
    },

    film(state) {
      return state.film;
    },
  },
};
