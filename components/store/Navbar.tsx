import {
  Box,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineShopping } from 'react-icons/ai';
import { cartContext } from '../../pages/_app';
import { CartItem } from '../../utilities/interface';

interface Props {
  collection?: string;
  onOpen?: () => void;
}

const Navbar = ({ collection, onOpen }: Props) => {
  const router = useRouter();
  const { cart } = useContext(cartContext);
  const [cartCount, setCartCount] = useState(0);
  const [isLargerThan80em] = useMediaQuery('(min-width: 80em)');

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
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      marginTop={[2, 14]}
      marginBottom={[0, 6]}
      paddingX={10}
      position="sticky"
      top={0}
      bgColor="whiteAlpha.800"
      zIndex={100}
      padding={4}
    >
      {isLargerThan80em ? (
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
              collection
                ? collection === 'women'
                  ? 'bold'
                  : 'normal'
                : 'normal'
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
      ) : collection ? (
        <AiOutlineMenu size={30} cursor="pointer" onClick={onOpen} />
      ) : (
        <Menu>
          <MenuButton as={IconButton} icon={<AiOutlineMenu size={30} />} />
          <MenuList>
            <MenuItem
              _hover={{ color: 'grey' }}
              zIndex={1000}
              onClick={() =>
                router.push({
                  pathname: '/store',
                  query: { collection: 'men' },
                })
              }
            >
              Men
            </MenuItem>
            <MenuItem
              _hover={{ color: 'grey' }}
              zIndex={1000}
              width="100px"
              onClick={() =>
                router.push({
                  pathname: '/store',
                  query: { collection: 'women' },
                })
              }
            >
              Women
            </MenuItem>
          </MenuList>
        </Menu>
      )}

      <Heading
        cursor="pointer"
        onClick={() => router.push('/')}
        letterSpacing=".4em"
        transition=".3s ease-in"
        _hover={{ transform: 'scale(1.2)' }}
        fontSize={['2xl', '5xl']}
        position="absolute"
        textAlign="center"
        left={0}
        right={0}
        zIndex={-100}
        width="300px"
        marginX="auto"
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
