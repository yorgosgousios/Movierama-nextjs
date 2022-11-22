import { Box } from "@chakra-ui/react";
const Container = ({ children, ...props }) => {
  if (props.fullWidth) {
    return (
      <Box
        maxW={["100%", "100%", "100%", "1366px"]}
        m={"auto"}
        pos="relative"
        background={"#323232"}
        {...props}
      >
        {children}
      </Box>
    );
  }
  return (
    <Box
      maxW={["100%", "100%", "100%", "1366px"]}
      px={{ base: "18px", md: "27px", xl: "120px" }}
      m={"auto"}
      pos="relative"
      className="container"
      background={"#323232"}
      {...props}
    >
      {children}
    </Box>
  );
};
export default Container;
