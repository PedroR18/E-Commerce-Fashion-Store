import { Flex, Image, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useContext } from 'react';
import Navbar from '../components/store/Navbar';
import { CartItem } from '../utilities/interface';
import { cartContext } from './_app';

const Cart: NextPage = () => {
  const { cart } = useContext(cartContext);
  return (
    <Flex direction="column">
      <Navbar />
      <Flex>
        <Flex
          width="50vw"
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={5}
        >
          {cart &&
            cart.map((el: CartItem) => {
              return (
                <Flex
                  key={`${el.product.id}-${el.size}`}
                  width="500px"
                  height="300px"
                  bgColor="grey"
                  borderRadius="2xl"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    src={el.product.photos[0]}
                    alt={el.product.name}
                    width="40%"
                    height="90%"
                  />
                  <Flex
                    direction="column"
                    width="50%"
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text>{el.product.brand}</Text>
                    <Text>{el.product.name}</Text>
                    <Text>{el.quantity}</Text>
                    <Text>{el.size}</Text>
                    <Text>
                      $ {Number(el.product.price) * Number(el.quantity)}
                    </Text>
                  </Flex>
                </Flex>
              );
            })}
        </Flex>
        <Flex width="50vw">
          <Text>Cart Summary</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Cart;
