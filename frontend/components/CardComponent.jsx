import {
  Box,
  Image,
  Text,
  Button,
  Stack,
  Flex,
  Badge,
  IconButton,
  useColorModeValue,HStack,useToast, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, useDisclosure,Input, VStack
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import productStore from "../store/product.store.js";
import { useState } from "react";


const ProductCard = ({ product}) => {
  const {deleteProduct,updateProduct} = productStore();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [updatedProduct,setUpdatedProduct] = useState(product)
  const toast = useToast();
  const handleDelete = async (pid) => {
    const {success,message} = await deleteProduct(pid);
    toast({
      title: success ? "Success" : "Error",
      description: success ? "Product deleted" : message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });
  }
  const handleUpdate = async (pid) => {
    console.log(updatedProduct)
    const {success,message} = await updateProduct(updatedProduct,pid);
    onClose();
    toast({
      title: success ? "Success" : "Error",
      description: success ? "Product Updated" : message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });
    
  }
  return ( 
   <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow="md"
      _hover={{ shadow: "lg", transform: "translateY(-4px)" }}
      transition="0.2s ease"
      bg={useColorModeValue('gray.300','gray.800')}
    >
      <Image
        src={product.image}
        alt={product.name}
        h="200px"
        w="100%"
        objectFit="cover"
      />

      <Box p="4">
        <Text fontWeight="bold" fontSize="lg" noOfLines={1}>
          {product.name}
        </Text>

        <Text color="gray.600">₹ {product.price}</Text>

 
        <HStack spacing="3" mt="3">
          <IconButton
            icon={<FaEdit />}
            colorScheme="green"
            aria-label="Add to cart"
            onClick={()=> onOpen()}
          />
          <IconButton
            icon={<MdDelete />}
            colorScheme="red"
            aria-label="Delete product"
            onClick={()=>handleDelete(product._id)}
          />
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <VStack spacing={'4'}>
            <Input placeholder='Product Name' value={updatedProduct.name} onChange={(e) => setUpdatedProduct({...updatedProduct,name:e.target.value})} />
            <Input placeholder='Prize' value={updatedProduct.price} onChange={(e) => setUpdatedProduct({...updatedProduct,price:e.target.value})} />
            <Input placeholder='Image Url' value={updatedProduct.image} onChange={(e) => setUpdatedProduct({...updatedProduct,image:e.target.value})} />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=> handleUpdate(product._id)}>
              Update
            </Button>
            <Button variant='ghost' onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};


export default ProductCard;
