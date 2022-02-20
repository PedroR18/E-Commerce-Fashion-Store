import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { cartContext } from '../../pages/_app';
import { CartItem } from '../../utilities/interface';

interface Props {
  collection?: string;
}

const Navbar = ({ collection }: Props) => {
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
      height="100px"
      width="100vw"
      justifyContent="space-around"
      alignItems="center"
    >
      <Flex gap={10}>
        <Text
          cursor="pointer"
          fontSize="xl"
          fontWeight={
            collection ? (collection === 'men' ? 'bold' : 'normal') : 'normal'
          }
          onClick={() =>
            router.push({
              pathname: '/store',
              query: { collection: 'men' },
            })
          }
        >
          Men
        </Text>
        <Text
          cursor="pointer"
          fontSize="xl"
          fontWeight={
            collection ? (collection === 'women' ? 'bold' : 'normal') : 'normal'
          }
          onClick={() =>
            router.push({
              pathname: '/store',
              query: { collection: 'women' },
            })
          }
        >
          Women
        </Text>
      </Flex>
      <Heading
        cursor="pointer"
        onClick={() => router.push('/')}
        letterSpacing=".4em"
        transition=".3s ease-in"
        _hover={{ transform: 'scale(1.2)' }}
        fontSize="4xl"
      >
        FLEX
      </Heading>
      <Box
        height="30px"
        width="30px"
        position="relative"
        onClick={() => router.push('/cart')}
        cursor="pointer"
        transition=".3s ease-in"
        _hover={{ transform: 'scale(1.1)' }}
      >
        <Text
          display="inline"
          position="absolute"
          right={0}
          top={4}
          bgColor="white"
          borderRadius="full"
          border="1px solid transparent"
        >
          {cartCount}
        </Text>
        <AiOutlineShopping size={30} />
      </Box>
    </Flex>
  );
};
export default Navbar;
