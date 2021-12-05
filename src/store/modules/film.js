import {
  getAllFilms,
  getEntitiesInfo,
  getSearch,
} from "../../services/swapiDev";

export default {
  actions: {
    async getAllFilmsAction({ commit }) {
      try {
        const films = await getAllFilms();

        commit("setAllFilms", films.data.results);
      } catch (error) {
        commit("getError", error);
      }
    },

    async getEntitiesInfoAction({ commit }, link) {
      try {
        const entitiesInfo = await getEntitiesInfo(link);

        commit("setEntitiesInfo", entitiesInfo.data);
      } catch (error) {
        commit("getError", error);
      }
    },

    async getSearchAction({ commit }, searchValue) {
      try {
        const searchContent = await getSearch(searchValue);

        commit(
          "setSearchContent",
          searchContent.map((obj) => obj.data.results)
        );
      } catch (error) {
        commit("getError", error);
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

    setEntitiesInfo(state, entitiesInfo) {
      state.entitiesInfo = entitiesInfo;
    },

    setSearchContent(state, searchContent) {
      state.searchContent = searchContent;
    },

    setIsSearching(state, isSearching) {
      state.isSearching = isSearching;
    },

    getError(state, error) {
      state.error = error;
    },
  },

  state: {
    films: [],
    film: {},
    entitiesInfo: {},
    searchContent: [],
    isSearching: false,
    error: "",
  },

  getters: {
    allFilms(state) {
      return state.films;
    },

    film(state) {
      return state.film;
    },

    entitiesInfo(state) {
      return state.entitiesInfo;
    },

    searchContent(state) {
      return state.searchContent;
    },

    isSearching(state) {
      return state.isSearching;
    },
  },
};
