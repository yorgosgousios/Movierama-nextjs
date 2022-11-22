import { Box, Spinner, Text, Button } from "@chakra-ui/react";
import useMovies from "../../hooks/useMovies";

import { Grid, GridItem } from "@chakra-ui/react";
import MovieItem from "../MovieItem";
import Pagination from "../Pagination";

const NowPlayingList = () => {
  const { newMovieData, isLoading, page, setPage, fetchNextPage } = useMovies();

  const imgSrc = "https://www.themoviedb.org/t/p/w188_and_h282_bestv2/";

  return (
    <>
      <Box background={"#323232"} mt="100px">
        <Box
          display={"flex"}
          mb="1rem"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text color={"white"} fontSize="1.5rem" fontWeight={"bold"} mr="2rem">
            In Theaters
          </Text>
          <Pagination page={page} setPage={setPage} />
        </Box>

        <Grid
          templateColumns="repeat(4, 1fr)"
          rowGap={"5rem"}
          columnGap={"1.5rem"}
        >
          {isLoading ? (
            <Spinner color="white" />
          ) : (
            newMovieData?.results?.map((movie) => {
              return (
                <GridItem key={movie?.id} w="100%" h="100%">
                  <MovieItem
                    title={movie?.title}
                    releaseDate={movie?.release_date}
                    img={`${imgSrc}${movie?.poster_path}`}
                    isLoading={isLoading}
                  />
                </GridItem>
              );
            })
          )}
        </Grid>
      </Box>
    </>
  );
};

export default NowPlayingList;
