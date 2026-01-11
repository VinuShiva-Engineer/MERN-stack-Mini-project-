import {
  VStack,
  Input,
  Container,
  Heading,
  Button,
  useToast,
  Text,
  Box,
  useColorModeValue,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import productStore from "../store/product.store";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = productStore();
  const toast = useToast();

  const handleCreateProduct = async () => {
    const { success, message } = await createProduct(newProduct);

    toast({
      title: success ? "Success" : "Error",
      description: success ? "Product added successfully" : message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });

    if (success) {
      setNewProduct({ name: "", price: "", image: "" });
    }
  };

  return (
    <Container maxW="container.sm" py={{ base: 6, md: 10 }}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        p={{ base: 6, md: 8 }}
        rounded="2xl"
        shadow="lg"
      >
        <Box mb={4}>
          <IconButton
            as={Link}
            to="/"
            icon={<ArrowBackIcon />}
            aria-label="Go back"
            size="lg"
            rounded="full"
            variant="ghost"
            transition="all 0.2s ease"
            _hover={{
              bg: useColorModeValue("gray.100", "whiteAlpha.200"),
              transform: "translateX(-3px)",
            }}
            _active={{
              transform: "scale(0.95)",
            }}
          />
        </Box>

        <VStack spacing={2} mb={6} textAlign="center">
          <Heading size="lg">Create New Product</Heading>
          <Text color={useColorModeValue("gray.600", "gray.400")}>
            Fill in the details below to add a new product
          </Text>
        </VStack>

        <VStack spacing={4}>
          <Input
            placeholder="Product name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            size="lg"
          />

          <Input
            placeholder="Price"
            type="number"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            size="lg"
          />

          <Input
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            size="lg"
          />

          <Button
            colorScheme="blue"
            size="lg"
            w="full"
            mt={2}
            _hover={{ transform: "translateY(-1px)" }}
            transition="all 0.2s"
            onClick={handleCreateProduct}
          >
            Add Product
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default CreatePage;
