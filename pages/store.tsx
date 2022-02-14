import { Box, Flex, Grid } from '@chakra-ui/react';
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
      <StoreSideBar />
      <Box height="100vh" width="300px" />
      <Grid templateColumns="repeat(5, 400px)" gap={5} m={5}>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </Grid>
    </Flex>
  );
};
export default Store;
