import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import SideBar from './SideBar';

const Banner = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      scrollSnapAlign="start"
      alignItems="center"
    >
      <SideBar />
      <Box width="100vw" height="100vh" overflow="hidden">
        <Image
          src="/banner.png"
          alt="Suit"
          minHeight="100%"
          minWidth="100%"
          align="0 -400px"
        />
      </Box>
      <Heading position="absolute" color="white" fontSize="10em">
        NAME
      </Heading>
    </Flex>
  );
};
export default Banner;
