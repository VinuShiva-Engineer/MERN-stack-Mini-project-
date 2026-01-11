import { Center, Spinner } from "@chakra-ui/react";

const PageLoader = () => (
  <Center minH="60vh">
    <Spinner
      size="xl"
      thickness="4px"
      speed="0.4s"
      color="purple.400"
    />
  </Center>
);

export default PageLoader;
