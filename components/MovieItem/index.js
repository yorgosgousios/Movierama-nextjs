import { Text, Box, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";

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
            display="flex"
            justifyContent={"center"}
            background="#c1c1c1"
            alignItems="center"
            _hover={{
              transform: "scale(1.1)",
              transition: "transform .25s ease-in-out",

              opacity: 0.7,
              cursor: "pointer",
            }}
            maxH="100%"
            maxW={"287px"}
            h="161px"
            // backgroundSize={"contain"}
            // backgroundRepeat="no-repeat"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <Image fill quality={100} src={img} />
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
