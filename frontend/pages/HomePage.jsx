import {
  Container,
  VStack,
  Text,
  SimpleGrid,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productStore from "../store/product.store";
import CardComponent from "../components/CardComponent";
import PageLoader from "../components/Loading";

const HomePage = () => {
  const { fetchAllProduct, products } = productStore();
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const loadingProducts = async () => {
        await fetchAllProduct();
        setLoading(false);
    }
    loadingProducts();
  }, [fetchAllProduct]);

  const mutedText = useColorModeValue("gray.600", "gray.400");
  if (loading){
    return <Container maxW={'1200px'} py={{ base: 6, md: 10 }}>
        <PageLoader/>
    </Container>
  }

  return (

    <Container maxW="1200px" py={{ base: 6, md: 10 }}>
      <VStack spacing={10} align="stretch">
        {/* Header */}
        <Box textAlign="center">
          <Text
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            letterSpacing="tight"
          >
            Current Products
          </Text>
          <Text mt={2} color={mutedText}>
            Manage your products, pricing, and inventory
          </Text>
        </Box>

        {/* Content */}
        {products.length === 0 ? (
          <Box
            textAlign="center"
            py={20}
            border="1px dashed"
            borderColor={useColorModeValue("gray.300", "gray.600")}
            rounded="xl"
          >
            <Text fontSize="xl" mb={3}>
              No products found 😕
            </Text>

            <Text color={mutedText}>
              Start by adding your first product to the store
            </Text>

            <Text
              as={Link}
              to="/create"
              display="inline-block"
              mt={4}
              fontWeight="semibold"
              color="purple.400"
              _hover={{ textDecoration: "underline" }}
            >
              Create a Product →
            </Text>
          </Box>
        ) : (
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3 }}
            spacing={8}
          >
            {products.map((product) => (
              <CardComponent key={product._id} product={product} />
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;

