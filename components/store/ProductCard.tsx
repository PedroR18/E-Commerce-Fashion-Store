import { Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Product } from '../../utilities/interface';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const router = useRouter();
  return (
    <Flex
      gap={3}
      p={3}
      direction="column"
      cursor="pointer"
      onClick={() => router.push(`/product/${product.id}`)}
    >
      <Image
        src={product.photos[0]}
        alt={product.name}
        height="400px"
        objectFit="contain"
      />
      <Text fontSize="2em">{product.brand}</Text>
      <Text>{product.name}</Text>
      <Text>${product.price}</Text>
    </Flex>
  );
};
export default ProductCard;
