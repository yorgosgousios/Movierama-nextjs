import { useQuery } from "react-query";
import { getPopularSeries } from "../services/series";
import { useState } from "react";

export default function useSeries() {
  const [page, setPage] = useState(1);
  const queryKey = ["series", page];

  const { data: seriesData, isLoading } = useQuery(
    queryKey,
    async () => {
      const movieResponse = await getPopularSeries();
      return movieResponse.data;
    },
    {
      refetchOnMount: false,
    }
  );

  return { seriesData, isLoading };
}
