import {
  Container,
  Flex,
  Text,
  Button,
  Heading,
  Box,
  HStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LuMoonStar, LuSun } from "react-icons/lu";
import { IoIosCreate } from "react-icons/io";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.600");
  const border = useColorModeValue("gray.200", "whiteAlpha.200");

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="100"
      backdropFilter="blur(12px)"
      bg={bg}
      borderBottom="1px solid"
      borderColor={border}
    >
      <Container maxW="1140px" px={4}>
        <Flex
          h="16"
          align="center"
          justify="space-between"
        >
          <Heading
            fontSize="3xl"
            fontWeight="bold"
            bgGradient="linear(to-r, blue.600, blue.300)"
            bgClip="text"
            letterSpacing="tight"
          >
            <Link to="/">Product Store</Link>
          </Heading>

          <HStack spacing={3}>
            <Button
              as={Link}
              to="/create"
              leftIcon={<IoIosCreate />}
              size="sm"
              variant="solid"
              colorScheme="blue"
              rounded="full"
              px={4}
              _hover={{ transform: "translateY(-1px)" }}
              transition="all 0.2s"
            >
              Create
            </Button>

            <Button
              onClick={toggleColorMode}
              size="sm"
              rounded="full"
              variant="ghost"
              fontSize="lg"
              _hover={{
                bg: useColorModeValue("gray.100", "whiteAlpha.200"),
                transform: "rotate(10deg)",
              }}
              transition="all 0.2s"
            >
              {colorMode === "light" ? <LuMoonStar /> : <LuSun />}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
