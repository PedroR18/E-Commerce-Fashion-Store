import { Flex, Text } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Flex
      bgColor="grey"
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
        <Text color="white">Store</Text>
        <Text color="white">Contact</Text>
        <Text color="white">About</Text>
      </Flex>
    </Flex>
  );
};
export default NavBar;
