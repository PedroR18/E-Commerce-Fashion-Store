import { Flex, Text } from '@chakra-ui/react';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

const SideBar = () => {
  return (
    <Flex
      bgColor="blackAlpha.600"
      width="100px"
      height="100vh"
      position="fixed"
      left={0}
      justifyContent="center"
      zIndex={100}
    >
      <Flex
        style={{
          transform: 'rotate(-90deg) translateX(0) translateZ(0)',
        }}
        height="100px"
        textAlign="end"
        direction="column"
        justifyContent="center"
        position="absolute"
        top={0}
      >
        <Text color="white" _hover={{ color: 'black' }} cursor="pointer">
          FACEBOOK
        </Text>
        <Text color="white" _hover={{ color: 'black' }} cursor="pointer">
          TWITTER
        </Text>
        <Text color="white" _hover={{ color: 'black' }} cursor="pointer">
          INSTAGRAM
        </Text>
        <Text color="white" _hover={{ color: 'black' }} cursor="pointer">
          PINTAREST
        </Text>
      </Flex>

      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        bottom={10}
        gap={2}
      >
        <FaCircle color="white" />
        <FaRegCircle color="white" />
        <FaRegCircle color="white" />
        <FaRegCircle color="white" />
        <FaRegCircle color="white" />
      </Flex>
    </Flex>
  );
};
export default SideBar;
