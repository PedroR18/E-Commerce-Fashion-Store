import {
  Box,
  Flex,
  Grid,
  HStack,
  Tag,
  TagCloseButton,
  TagLabel,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductCard from '../components/store/ProductCard';
import StoreSideBar from '../components/store/StoreSideBar';
import { Product } from '../utilities/interface';

const Store: NextPage = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(Object.values(data)));
  }, []);
  return (
    <Flex>
      <StoreSideBar products={products} />
      <Box height="100vh" width="300px" />
      <Flex direction="column">
        <Flex height="100px" width="100%" bgColor="grey">
          <HStack spacing={4}>
            <Tag
              size="md"
              borderRadius="full"
              variant="solid"
              colorScheme="green"
            >
              <TagLabel>Green</TagLabel>
              <TagCloseButton />
            </Tag>
          </HStack>
        </Flex>
        <Grid templateColumns="repeat(5, 400px)" gap={5} m={5}>
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </Grid>
      </Flex>
    </Flex>
  );
};
export default Store;
