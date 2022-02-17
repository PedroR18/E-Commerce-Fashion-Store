import { Box, Button, Flex, Select, useDisclosure } from '@chakra-ui/react';
import moment from 'moment';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Gallery from '../../components/store/Gallery';
import ProductModal from '../../components/store/ProductModal';
import StoreSideBar from '../../components/store/StoreSideBar';
import { Product } from '../../utilities/interface';
import { cartContext } from '../_app';

const ProductPage: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const { productId } = router.query;
  const { setCart } = useContext(cartContext);
  const [currentProduct, setCurrentProduct] = useState<Product>();
  const [highlight, setHighlight] = useState('');
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
      <Flex justifyContent="space-around" alignItems="center" width="100%">
        {currentProduct && (
          <Gallery
            photos={currentProduct!.photos}
            onOpen={onOpen}
            highlight={highlight}
            setHighlight={setHighlight}
          />
        )}
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          {currentProduct && (
            <>
              <p>{currentProduct.brand}</p>
              <p>{currentProduct.name}</p>
              <p>$ {currentProduct.price}</p>
              <Select placeholder="Select size">
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </Select>
              <p>Estimated Delivery</p>
              <p>
                {moment().add(5, 'days').format('MMM D')} -{' '}
                {moment().add(7, 'days').format('MMM D')}
              </p>
            </>
          )}
          <Button
            onClick={() =>
              setCart({ type: 'addToCart', payload: currentProduct })
            }
          >
            Add to Cart
          </Button>
        </Flex>
      </Flex>
      {currentProduct && (
        <ProductModal
          isOpen={isOpen}
          onClose={onClose}
          photos={currentProduct!.photos}
        />
      )}
    </Flex>
  );
};
export default ProductPage;
