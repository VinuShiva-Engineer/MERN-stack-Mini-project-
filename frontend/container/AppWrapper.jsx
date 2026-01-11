import { Box, useColorModeValue } from "@chakra-ui/react";

const PageWrapper = ({ children }) => {
  const bg = useColorModeValue(
    "gray.50",
    "linear-gradient(180deg, #0F172A 0%, #020617 100%)" 
  );

  return (
    <Box minH="100vh" bg={bg}>
      {children}
    </Box>
  );
};

export default PageWrapper;