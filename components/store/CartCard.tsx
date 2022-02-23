import { Box, Flex, Image, Select, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { cartContext } from '../../pages/_app';
import { CartItem } from '../../utilities/interface';

interface Props {
  product: CartItem;
}

const CartCard = ({ product }: Props) => {
  const { setCart } = useContext(cartContext);
  return (
    <Flex
      width="800px"
      height="300px"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Text alignSelf="end" fontSize="0.9em">
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
      >
        <Image
          src={product.product.photos[0]}
          alt={product.product.name}
          width="100px"
          objectFit="contain"
        />
        <Flex direction="column" gap={1}>
          <Text fontWeight="bold" fontSize="1.1em">
            {product.product.brand}
          </Text>
          <Text>{product.product.name}</Text>
          <Text fontSize="0.8em">FLEX ID: {product.product.id}</Text>
        </Flex>

        <Text fontWeight="bold" fontSize="1.1em">
          ${product.product.price}.00
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

{
  /* <Image
src={product.product.photos[0]}
alt={product.product.name}
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
<Text>{product.product.brand}</Text>
<Text>{product.product.name}</Text>
<Text>Quantity: {product.quantity}</Text>


<Text>Size: {product.size.toUpperCase()}</Text>
<Text>
  $ {Number(product.product.price) * Number(product.quantity)}
</Text>
</Flex> */
}
