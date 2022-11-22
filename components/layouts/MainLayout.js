import { Box, useBreakpointValue } from "@chakra-ui/react";
import Header from "../Header";
import Container from "../Container";
import HeaderMobile from "../HeaderMobile";

const MainLayout = ({
  children,
  isSeries,
  isMovie,
  setIsMovie,
  setIsSeries,
  isSearch,
  setIsSearch,
}) => {
  return (
    <>
      <Header
        isSeries={isSeries}
        setIsSeries={setIsSeries}
        isMovie={isMovie}
        setIsMovie={setIsMovie}
        isSearch={isSearch}
        setIsSearch={setIsSearch}
      />

      <Container>
        <Box>{children}</Box>
      </Container>
    </>
  );
};

export default MainLayout;
