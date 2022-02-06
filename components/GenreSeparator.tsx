import { Box, Flex, Image, Text } from '@chakra-ui/react';

const GenreSeparator = () => {
  return (
    <Flex width="100vw" height="100vh" scrollSnapAlign="start">
      <Flex
        width="50vw"
        justifyContent="center"
        alignItems="center"
        position="relative"
        cursor="pointer"
      >
        <Box
          position="absolute"
          zIndex={-10}
          width="50vw"
          height="100vh"
          overflow="hidden"
        >
          <Image src="/home-female.png" alt="female" align="0 -340px" />
        </Box>

        <Text
          fontSize="4em"
          color="white"
          textDecoration="overline"
          position="absolute"
          style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}
          right={10}
          bottom={20}
        >
          HER
        </Text>
      </Flex>

      <Flex
        width="50vw"
        justifyContent="center"
        alignItems="center"
        position="relative"
        cursor="pointer"
      >
        <Box
          position="absolute"
          zIndex={-10}
          width="50vw"
          height="100vh"
          overflow="hidden"
        >
          <Image src="/home-male.png" alt="male" align="0 -400px" />
        </Box>
        <Text
          textDecoration="underline"
          fontSize="4em"
          position="absolute"
          left={10}
          top={20}
          style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}
        >
          HIM
        </Text>
      </Flex>
    </Flex>
  );
};
export default GenreSeparator;
