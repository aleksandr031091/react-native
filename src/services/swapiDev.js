import axios from "axios";

axios.defaults.baseURL = "https://swapi.dev/api";

export const getAllFilms = async () => {
  return await axios.get("films");
};

// ========================== on Click link==========================

export const getEntitiesInfo = async (entities) => {
  return await axios.get(entities);
};

// ========================== Searching ==========================

export const getSearch = async (searchValue) => {
  const promises = [
    axios.get(`films/?search=${searchValue}`),
    axios.get(`people/?search=${searchValue}`),
    axios.get(`planets/?search=${searchValue}`),
    axios.get(`starships/?search=${searchValue}`),
  ];

  const promisesResolved = promises.map((promise) =>
    promise.catch((error) => ({ error }))
  );

  return await axios.all(promisesResolved);
};
