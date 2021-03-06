import { Box, Flex, Image, Select, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { cartContext } from '../../pages/_app';
import { CartItem } from '../../utilities/interface';

interface Props {
  product: CartItem;
}

const CartCard = ({ product }: Props) => {
  const { setCart } = useContext(cartContext);
  const router = useRouter();
  return (
    <Flex
      width={['100%', '120%', '700px', '600px', '700px', '800px']}
      height="300px"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Text fontSize="0.9em" alignSelf="end">
        Import duties are included.
      </Text>

      <hr
        style={{
          border: '1px solid black',
          width: '100%',
        }}
      />
      <Flex
        justifyContent="space-around"
        alignItems="center"
        width="100%"
        marginTop="4"
        gap={1}
      >
        <Image
          src={product.product.photos[0]}
          alt={product.product.name}
          width={['80px', '80px', '100px']}
          objectFit="contain"
          onClick={() => router.push(`/product/${product.product.id}`)}
          cursor="pointer"
        />
        <Flex direction="column" gap={1}>
          <Text fontWeight="bold" fontSize="1.1em">
            {product.product.brand}
          </Text>
          <Text>{product.product.name}</Text>
          <Text fontSize="0.8em">FLEX ID: {product.product.id}</Text>
        </Flex>

        <Text fontWeight="bold" fontSize="1.1em">
          ${product.product.price * product.quantity}.00
        </Text>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Box>
            <Text>Size</Text>
            <Text fontWeight="bold">{product.size.toUpperCase()}</Text>
          </Box>
          <Box>
            <Text>Quantity</Text>
            <Select
              onChange={(e) =>
                setCart({
                  type: 'updateCartItem',
                  payload: {
                    product: product.product,
                    size: product.size,
                    quantity: Number(e.target.value),
                  },
                })
              }
            >
              {[...Array.from(Array(product.quantity + 3).keys())].map(
                (num) => (
                  <option
                    key={num}
                    value={num}
                    selected={num === product.quantity ? true : false}
                  >
                    {num}
                  </option>
                )
              )}
            </Select>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default CartCard;
