import axios from "axios";

export const getNewMovies = (page) => {
  return axios({
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=bc50218d91157b1ba4f142ef7baaa6a0&page=${page}`,
    method: "GET",
  });
};
