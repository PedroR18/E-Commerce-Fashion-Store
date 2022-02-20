import { Button, Flex, Image, Select, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import EmptyCart from '../components/store/EmptyCart';
import Navbar from '../components/store/Navbar';
import { CartItem } from '../utilities/interface';
import { cartContext } from './_app';

const Cart: NextPage = () => {
  const { cart, setCart } = useContext(cartContext);
  const [total, setTotal] = useState(0);

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
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Navbar />
        <Flex width="80%" gap={10}>
          <Flex
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
                    width="800px"
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
                      objectFit="contain"
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
                      <Text>Quantity: {el.quantity}</Text>
                      <Select
                        onChange={(e) =>
                          setCart({
                            type: 'updateCartItem',
                            payload: {
                              product: el.product,
                              size: el.size,
                              quantity: Number(e.target.value),
                            },
                          })
                        }
                      >
                        {[...Array.from(Array(el.quantity + 3).keys())].map(
                          (num) => (
                            <option
                              key={num}
                              value={num}
                              selected={num === el.quantity ? true : false}
                            >
                              {num}
                            </option>
                          )
                        )}
                      </Select>

                      <Text>Size: {el.size.toUpperCase()}</Text>
                      <Text>
                        $ {Number(el.product.price) * Number(el.quantity)}
                      </Text>
                    </Flex>
                  </Flex>
                );
              })}
          </Flex>
          <Flex direction="column">
            <Text> Summary</Text>
            <Text>SubTotal ${total}.00</Text>
            <Text>Delivery $24.95</Text>
            <Text>Total ${total + 24.95}</Text>
            <Button>Go To Checkout</Button>
          </Flex>
        </Flex>
      </Flex>
    );
  } else
    return (
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Navbar />
        <EmptyCart />
      </Flex>
    );
};
export default Cart;
