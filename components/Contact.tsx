import { Box, Flex, Image, Text } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Flex
      height="100vh"
      width="100vw"
      scrollSnapAlign="start"
      justifyContent="center"
      alignItems="center"
      direction="column"
      position="relative"
    >
      <Image
        src="/contact-background.jpg"
        alt="Background Texture"
        minHeight="100%"
        minWidth="100%"
        maxHeight="100vh"
        maxWidth="100vw"
        position="absolute"
      />
      <Flex
        height="500px"
        width="500px"
        bgColor="white"
        zIndex="10"
        justifyContent="space-between"
        alignItems="center"
        direction="column"
      >
        <Text>Some Text</Text>
        <Text>Text</Text>
        <Text>Some more Text</Text>
      </Flex>
      <Box position="absolute" right={50} bottom={0}>
        <Text fontSize="15em" color="white">
          TEXT
        </Text>
      </Box>
    </Flex>
  );
};
export default Contact;
