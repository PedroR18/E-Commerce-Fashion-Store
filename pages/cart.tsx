import { Button, Flex, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import CartCard from '../components/store/CartCard';
import EmptyCart from '../components/store/EmptyCart';
import Footer from '../components/store/Footer';
import Navbar from '../components/store/Navbar';
import { CartItem } from '../utilities/interface';
import { cartContext } from './_app';

const Cart: NextPage = () => {
  const { cart, setCart } = useContext(cartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    document.title = `FLEX - Cart(${cart.length})`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (cart) {
      setTotal(0);
      cart.forEach((el: CartItem) => {
        setTotal((prev) => prev + el.product.price * el.quantity);
        if (el.quantity === 0) {
          setCart({ type: 'removeFromCart', payload: el });
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);
  if (cart && cart.length !== 0) {
    return (
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        width={['100%', '100%', '100%', '100%', '80%', '70%']}
        margin="0 auto"
      >
        <Navbar />
        <Flex
          width="100%"
          gap={10}
          justifyContent="space-around"
          direction={['column', 'column', 'column', 'row']}
          alignItems="center"
        >
          <Flex
            direction="column"
            justifyContent="space-around"
            alignItems="center"
          >
            {cart &&
              cart.map((el: CartItem) => {
                return (
                  <CartCard key={`${el.product.id}-${el.size}`} product={el} />
                );
              })}
          </Flex>
          <Flex direction="column" width="350px" mt={4}>
            <Text fontSize="1.5em" fontWeight="bold">
              Summary
            </Text>
            <Flex justifyContent="space-between" alignItems="center" mt="6">
              <Text>SubTotal</Text>
              <Text fontSize="1.2em">${total}.00</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center" my={2}>
              <Text>Delivery</Text>
              <Text fontSize="1.2em">$24.95</Text>
            </Flex>
            <hr style={{ borderTop: '2px solid black' }} />
            <Flex justifyContent="space-between" alignItems="center" mt={2}>
              <Text>Total</Text>
              <Flex direction="column" justifyContent="center" alignItems="end">
                <Text fontSize="1.2em" fontWeight="bold">
                  ${total + 24.95}
                </Text>
                <Text fontSize=".9em">Import duties included</Text>
              </Flex>
            </Flex>
            <Button
              bgColor="black"
              color="white"
              _hover={{ bgColor: 'grey' }}
              mt="6"
              letterSpacing=".05em"
              fontSize="1.3em"
            >
              Go To Checkout
            </Button>
          </Flex>
        </Flex>
      </Flex>
    );
  } else
    return (
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        width="60%"
        margin="0 auto"
      >
        <Navbar />
        <EmptyCart />

        <Footer />
      </Flex>
    );
};
export default Cart;
