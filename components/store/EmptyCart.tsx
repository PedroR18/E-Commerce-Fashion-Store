import { Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsCartX } from 'react-icons/bs';

const EmptyCart = () => {
  const router = useRouter();
  return (
    <Flex
      height="50vh"
      justifyContent="center"
      alignItems="center"
      gap={10}
      direction="column"
    >
      <BsCartX size={100} />
      <Text fontSize="1.5em">Your cart is empty!</Text>
      <Text
        cursor="pointer"
        textDecoration="underline"
        _hover={{ transform: 'scale(1.2)' }}
        transition=".3s ease-in"
        onClick={() => router.push('/store')}
      >
        Go to Store
      </Text>
    </Flex>
  );
};
export default EmptyCart;
