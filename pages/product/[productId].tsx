import { Box, Button, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import StoreSideBar from '../../components/store/StoreSideBar';
import { Product } from '../../utilities/interface';
import { cartContext } from '../_app';

const ProductPage: NextPage = () => {
  const router = useRouter();

  const { productId } = router.query;
  const { setCart } = useContext(cartContext);
  const [currenctProduct, setCurrentProduct] = useState<Product>();
  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        const product: any = Object.values(data).filter(
          (el: any) => el.id === productId
        );
        setCurrentProduct(product[0]);
      });
  }, [productId]);
  return (
    <Flex>
      <StoreSideBar />
      <Box height="100vh" width="300px" />
      <Flex>
        <p>{productId}</p>
        {currenctProduct && <p>{currenctProduct.name}</p>}
        <Button
          onClick={() =>
            setCart({ type: 'addToCart', payload: currenctProduct })
          }
        >
          Add to Cart
        </Button>
        <Button onClick={() => router.push('/store')}>Go Back</Button>
      </Flex>
    </Flex>
  );
};
export default ProductPage;
