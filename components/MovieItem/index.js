import { Text, Box, Image, Spinner } from "@chakra-ui/react";
import { useState } from "react";

const MovieItem = ({ title, img, releaseDate, isLoading }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      {isLoading ? (
        <Spinner color="white" />
      ) : (
        <Box
          position={"relative"}
          overflow="hidden"
          _hover={{ border: "2px solid white" }}
          borderRadius={"4px"}
        >
          <Box
            background={`url(${img})`}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            _hover={{
              transform: "scale(1.1)",
              transition: "transform .25s ease-in-out",

              opacity: 0.7,
              cursor: "pointer",
            }}
            maxH="100%"
            maxW={"287px%"}
            h="161px"
            backgroundSize={"cover"}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {isHover && (
              <Text
                cursor={"pointer"}
                fontSize={"24px"}
                lineHeight="24px"
                color="white !important"
                fontWeight={"bold"}
                textAlign={"center"}
              >
                {title}
              </Text>
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

export default MovieItem;
