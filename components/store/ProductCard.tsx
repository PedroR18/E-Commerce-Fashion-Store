import { Flex, Image, Text } from '@chakra-ui/react';
import { Product } from '../../utilities/interface';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Flex border="1px solid black">
      <Text>{product.name}</Text>
      <Image src={product.photos[0]} alt={product.name} height="100px" />
    </Flex>
  );
};
export default ProductCard;
