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
          transformOrigin: 'right',
        }}
        position="absolute"
        height="100px"
        textAlign="end"
        direction="column"
        justifyContent="center"
        left={-1}
        top={-8}
      >
        <Text color="white">Something</Text>
      </Flex>
    </Flex>
  );
};
export default SideBar;
