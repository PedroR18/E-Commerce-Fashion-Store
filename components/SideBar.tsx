import { Flex, Text } from '@chakra-ui/react';

const SideBar = () => {
  return (
    <Flex
      bgColor="blackAlpha.600"
      width="100px"
      height="100vh"
      position="absolute"
      left={0}
      justifyContent="center"
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
    </Flex>
  );
};
export default SideBar;
