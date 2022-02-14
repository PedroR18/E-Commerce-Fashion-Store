import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AiOutlineShopping } from 'react-icons/ai';

const StoreSideBar = () => {
  const router = useRouter();
  return (
    <Flex
      width="300px"
      height="100vh"
      bgColor="grey"
      position="fixed"
      direction="column"
      gap={5}
      alignItems="center"
    >
      <p>StoreSideBar</p>
      <AiOutlineShopping
        size={50}
        onClick={() => router.push('/cart')}
        cursor="pointer"
      />
    </Flex>
  );
};
export default StoreSideBar;
