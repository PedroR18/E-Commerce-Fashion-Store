import { Button, Flex, Select, Text, useDisclosure } from '@chakra-ui/react';
import moment from 'moment';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Footer from '../../components/store/Footer';
import Gallery from '../../components/store/Gallery';
import Navbar from '../../components/store/Navbar';
import ProductModal from '../../components/store/ProductModal';
import { Product } from '../../utilities/interface';
import { cartContext } from '../_app';

const ProductPage: NextPage = () => {
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const router = useRouter();

  const { productId } = router.query;
  const { setCart } = useContext(cartContext);
  const [currentProduct, setCurrentProduct] = useState<Product>();
  const [highlight, setHighlight] = useState(0);
  const [size, setSize] = useState('');

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

  useEffect(() => {
    if (currentProduct) {
      document.title = `FLEX - ${currentProduct.name}`;
    }
  }, [currentProduct]);
  return (
    <Flex
      direction="column"
      width={['100%', '100%', '100%', '100%', '80%', '70%']}
      justifyContent="center"
      alignItems="center"
      margin="0 auto"
      gap={[0, 14]}
    >
      <Navbar />

      <Flex width="100%">
        <Flex
          justifyContent="space-around"
          alignItems="center"
          width="100%"
          direction={['column', 'column', 'column', 'row']}
        >
          {currentProduct && (
            <Gallery
              photos={currentProduct!.photos}
              onOpen={onOpenModal}
              highlight={highlight}
              setHighlight={setHighlight}
            />
          )}
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap={4}
            width={['100%', '800px']}
          >
            {currentProduct && (
              <>
                <Text fontWeight="bold" fontSize="2em">
                  {currentProduct.brand}
                </Text>
                <Text fontStyle="italic" fontSize="1.3em">
                  {currentProduct.name}
                </Text>
                <Text fontSize="1.5em">${currentProduct.price}</Text>

                <Select
                  placeholder="Select size"
                  onChange={(e) => setSize(e.target.value)}
                  borderColor="black"
                  width="40%"
                  fontSize="1.2em"
                >
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                </Select>
                <Button
                  color="white"
                  bgColor="black"
                  width="40%"
                  _hover={{ backgroundColor: 'grey' }}
                  onClick={() => {
                    if (size) {
                      setCart({
                        type: 'addToCart',
                        payload: { product: currentProduct, size, quantity: 1 },
                      });
                    } else alert('SELECT A SIZE');
                  }}
                >
                  Add to Cart
                </Button>

                <Text fontWeight="bold" fontSize="1.2em" mt="12">
                  Estimated Delivery
                </Text>
                <Text>
                  {moment().add(5, 'days').format('MMM D')} -{' '}
                  {moment().add(7, 'days').format('MMM D')}
                </Text>
              </>
            )}
          </Flex>
        </Flex>
        {currentProduct && (
          <ProductModal
            isOpen={isOpenModal}
            onClose={onCloseModal}
            photos={currentProduct!.photos}
            highlight={highlight}
          />
        )}
      </Flex>

      <Footer />
    </Flex>
  );
};
export default ProductPage;
