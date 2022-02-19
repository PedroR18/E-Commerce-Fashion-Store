import { Box, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { cartContext } from '../../pages/_app';
import { CartItem } from '../../utilities/interface';

const Navbar = () => {
  const router = useRouter();
  const { cart } = useContext(cartContext);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (cart) {
      setCartCount(0);
      cart.forEach((el: CartItem) => {
        setCartCount((prev) => prev + el.quantity);
      });
    }
  }, [cart]);
  return (
    <Flex
      height="50px"
      width="100vw"
      bgColor="red"
      justifyContent="space-around"
    >
      <Text cursor="pointer" onClick={() => router.push('/store')}>
        FLEX
      </Text>
      <Box height="50px" width="50px" position="relative">
        <Text display="inline" position="absolute" right={0}>
          {cartCount}
        </Text>
        <AiOutlineShopping
          size={50}
          onClick={() => router.push('/cart')}
          cursor="pointer"
        />
      </Box>
    </Flex>
  );
};
export default Navbar;
