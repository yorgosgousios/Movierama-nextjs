import { useState } from "react";
import { useQuery } from "react-query";
import { getNewMovies } from "../services/movie";

export default function useMovies() {
  const [page, setPage] = useState(1);
  const queryKey = ["movies", page];

  const { data: newMovieData, isLoading } = useQuery(
    queryKey,
    async () => {
      const movieResponse = await getNewMovies(page);
      return movieResponse.data;
    },
    {
      refetchOnMount: false,
    }
  );

  return { newMovieData, isLoading, page, setPage };
}
