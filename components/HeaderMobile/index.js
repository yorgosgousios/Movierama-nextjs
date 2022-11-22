import { Box, Text } from "@chakra-ui/react";

const HeaderMobile = ({ isSeries, isMovie, setIsMovie, setIsSeries }) => {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent={"space-between"}
      background={"#323232"}
    >
      <Box w={"200px"} display="flex">
        <Box
          color={"white"}
          borderBottom={isMovie ? "1px solid white" : "none"}
          _hover={{ transition: "border 0.6s linear" }}
          fontWeight={isMovie ? "bold" : "normal"}
          cursor={"pointer"}
          onClick={() => {
            setIsMovie(true);
            setIsSeries(false);
          }}
          marginRight="2rem"
        >
          In Theaters
        </Box>
        <Box
          color={"white"}
          borderBottom={isSeries ? "1px solid white" : "none"}
          cursor={"pointer"}
          fontWeight={isSeries ? "bold" : "normal"}
          onClick={() => {
            setIsSeries(true);
            setIsMovie(false);
          }}
        >
          Series
        </Box>
      </Box>
      <Text height={"100%"} color={"red"} fontSize="48px">
        MovieRama
      </Text>
      {/* <Search /> */}
    </Box>
  );
};

export default HeaderMobile;
