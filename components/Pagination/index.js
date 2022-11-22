import { Box, Button } from "@chakra-ui/react";

const Pagination = ({ page, setPage, dataPage }) => {
  return (
    <>
      <Box className="nav btn-container" display={"flex"}>
        <Box
          as="button"
          height={"fit-content"}
          onClick={() => {
            page > 1 && setPage(page - 1);
          }}
          disabled={page === 1}
          cursor={page === 1 && "not-allowed"}
          color="white"
          mr="1rem"
          _hover={page !== 1 && { borderBottom: "1px solid white" }}
        >
          Prev
        </Box>

        <Box
          as="button"
          height={"fit-content"}
          _hover={{ borderBottom: "1px solid white" }}
          color="white"
          onClick={() => setPage(page + 1)}
        >
          Next
        </Box>
      </Box>
    </>
  );
};

export default Pagination;
