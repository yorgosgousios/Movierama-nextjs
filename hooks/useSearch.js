import { useState } from "react";
import { useQuery } from "react-query";
import { getNewMovies } from "../services/movie";
import { getSearchResults } from "../services/search";

export default function useSearch() {
  const [page, setPage] = useState(1);
  const [text, setText] = useState("");
  const queryKey = ["search", page, text];

  const { data: searchData, isLoading } = useQuery(
    queryKey,
    async () => {
      const searchResponse = await getSearchResults(text, page);
      return searchResponse.data;
    },
    {
      refetchOnMount: false,
    }
  );

  return { searchData, isLoading, page, setPage, text, setText };
}
