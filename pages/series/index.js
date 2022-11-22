import { Box, Spinner, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import MovieItem from "../../components/MovieItem";
import useSeries from "../../hooks/useSeries";

const Series = () => {
  const { seriesData, isLoading } = useSeries();
  console.log(seriesData, "data");
  const imgSrc = "https://www.themoviedb.org/t/p/w188_and_h282_bestv2/";

  return (
    <>
      <Box mt="100px">
        <Text color={"white"} fontSize="1.5rem" fontWeight={"bold"} mb="1rem">
          What to watch
        </Text>
        <Grid
          templateColumns="repeat(4, 1fr)"
          rowGap={"5rem"}
          columnGap={"1.5rem"}
        >
          {isLoading ? (
            <Spinner color="white" />
          ) : (
            seriesData?.results?.map((serie) => {
              return (
                <GridItem key={serie?.id} w="100%" h="100%">
                  <MovieItem
                    title={serie?.name}
                    releaseDate={serie?.first_air_date}
                    img={`${imgSrc}${serie?.poster_path}`}
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

export default Series;
