import { Box, Flex, Text } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Flex
      bgColor="grey"
      width="100px"
      height="100vh"
      position="absolute"
      left={0}
    >
      <Box
        style={{
          transform: 'rotate(-90deg) translateX(0) translateZ(0)',
          transformOrigin: 'left',
        }}
        position="absolute"
        top={10}
        left={10}
        textAlign="end"
      >
        <Text color="white">Store</Text>
        <Text color="white">Contact</Text>
        <Text color="white">About</Text>
      </Box>
    </Flex>
  );
};
export default NavBar;
