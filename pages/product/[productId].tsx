import { Button, Flex, Select, Text, useDisclosure } from '@chakra-ui/react';
import moment from 'moment';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineStar, AiOutlineTag } from 'react-icons/ai';
import { MdOutlineLocalShipping } from 'react-icons/md';
import Footer from '../../components/store/Footer';
import Gallery from '../../components/store/Gallery';
import Navbar from '../../components/store/Navbar';
import ProductModal from '../../components/store/ProductModal';
import { Product } from '../../utilities/interface';
import { cartContext } from '../_app';

const ProductPage: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  return (
    <Flex
      direction="column"
      width="60%"
      justifyContent="center"
      alignItems="center"
      margin="0 auto"
      gap={14}
    >
      <Navbar />
      <Flex width="100%">
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
            gap={4}
            width="800px"
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
            isOpen={isOpen}
            onClose={onClose}
            photos={currentProduct!.photos}
            highlight={highlight}
          />
        )}
      </Flex>

      <Flex
        marginTop="120px"
        justifyContent="space-around"
        alignItems="center"
        width="100%"
      >
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          <AiOutlineTag size={40} />
          <Text fontWeight="bold" fontSize="1.5em">
            {"The one that you want? We've got it."}
          </Text>
          <Text fontSize="1.2em">Shop over 100,000 styles</Text>
          <Text textDecoration="underline" cursor="pointer">
            View All
          </Text>
        </Flex>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          <AiOutlineStar size={40} />
          <Text fontWeight="bold" fontSize="1.5em">
            4.7/5 stars and 25,000+ reviews
          </Text>
          <Text fontSize="1.2em">You know you can trust us</Text>
          <Text textDecoration="underline" cursor="pointer">
            Read Reviews
          </Text>
        </Flex>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          <MdOutlineLocalShipping size={40} />
          <Text fontWeight="bold" fontSize="1.5em">
            Free global returns collection service
          </Text>
          <Text fontSize="1.2em">Changed your mind? No problem</Text>
          <Text textDecoration="underline" cursor="pointer">
            Read More
          </Text>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
};
export default ProductPage;
