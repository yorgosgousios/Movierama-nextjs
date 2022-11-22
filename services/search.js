import axios from "axios";

export const getSearchResults = (search, page) => {
  return axios({
    url: `https://api.themoviedb.org/3/search/movie?api_key=bc50218d91157b1ba4f142ef7baaa6a0&query=${search}&page=${page}`,
    method: "GET",
  });
};
