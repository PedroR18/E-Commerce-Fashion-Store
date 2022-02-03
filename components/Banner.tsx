import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { AiOutlineShopping } from 'react-icons/ai';
import NavBar from './NavBar';

const Banner = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <NavBar />
      <Box width="100vw" height="100vh" overflow="hidden">
        <Image src="/banner.jpg" alt="Suit" />
      </Box>
      <Heading position="absolute" color="white" fontSize="10em">
        NAME
      </Heading>
      <Box position="absolute" right={14} top={14}>
        <AiOutlineShopping size="50" color="white" />
      </Box>
    </Flex>
  );
};
export default Banner;
