import { Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Product } from '../../utilities/interface';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const router = useRouter();
  const [pic, setPic] = useState(product.photos[0]);

  return (
    <Flex
      gap={3}
      p={3}
      direction="column"
      cursor="pointer"
      onClick={() => router.push(`/product/${product.id}`)}
    >
      <Image
        src={pic}
        alt={product.name}
        height="300px"
        objectFit="contain"
        onMouseOver={() => setPic(product.photos[1])}
        onMouseLeave={() => setPic(product.photos[0])}
      />
      <Text fontSize="2em">{product.brand}</Text>
      <Text>{product.name}</Text>
      <Text>${product.price}</Text>
    </Flex>
  );
};
export default ProductCard;
