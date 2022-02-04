import { Box, Button, Flex, Image } from '@chakra-ui/react';

const GenreSeparator = () => {
  return (
    <Flex width="100vw" height="100vh" scrollSnapAlign="start">
      <Flex width="50vw" justifyContent="center" alignItems="center">
        <Box
          position="absolute"
          zIndex={-10}
          width="50vw"
          height="100vh"
          overflow="hidden"
        >
          <Image
            src="/home-female.jpg"
            alt="female"
            align="0 -100px"
            filter="grayscale(1)"
          />
        </Box>
        <Button>For HER</Button>
      </Flex>

      <Flex width="50vw" justifyContent="center" alignItems="center">
        <Box
          position="absolute"
          zIndex={-10}
          width="50vw"
          height="100vh"
          overflow="hidden"
          filter="grayscale(1)"
        >
          <Image src="/home-male.jpg" alt="male" align="0 -300px" />
        </Box>
        <Button>For HIM</Button>
      </Flex>
    </Flex>
  );
};
export default GenreSeparator;
