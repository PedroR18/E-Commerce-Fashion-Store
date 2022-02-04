import { Flex, Heading } from '@chakra-ui/react';

const GenreSeparator = () => {
  return (
    <Flex width="100vw" height="100vh" scrollSnapAlign="start">
      <Flex
        width="50vw"
        justifyContent="center"
        alignItems="center"
        bgColor="pink"
      >
        <Heading>For HER</Heading>
      </Flex>

      <Flex
        width="50vw"
        justifyContent="center"
        alignItems="center"
        bgColor="blue"
      >
        <Heading>For HIM</Heading>
      </Flex>
    </Flex>
  );
};
export default GenreSeparator;
