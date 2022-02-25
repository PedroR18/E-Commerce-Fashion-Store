import { Flex, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';

const Contact = () => {
  const [isLargerThan30em] = useMediaQuery('(min-width: 30em)');

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
        src="/contact-background.png"
        alt="Background Texture"
        minHeight="100%"
        minWidth="100%"
        maxHeight="100vh"
        maxWidth="100vw"
        position="absolute"
        objectFit="cover"
        zIndex={-10}
      />
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={5}
      >
        <Text
          color="white"
          fontSize={['2em', '3em', '3em', '4em']}
          textAlign="center"
        >
          {`Don't miss anything`.toUpperCase()}
        </Text>
        <Flex justifyContent="center" alignItems="center" gap={10}>
          <AiFillFacebook
            color="white"
            size={isLargerThan30em ? 60 : 40}
            cursor="pointer"
          />
          <AiFillTwitterSquare
            color="white"
            size={isLargerThan30em ? 60 : 40}
            cursor="pointer"
          />
          <AiFillInstagram
            color="white"
            size={isLargerThan30em ? 60 : 40}
            cursor="pointer"
          />
          <AiFillLinkedin
            color="white"
            size={isLargerThan30em ? 60 : 40}
            cursor="pointer"
          />
        </Flex>
      </Flex>
      <Heading
        position="absolute"
        bottom={20}
        color="white"
        letterSpacing=".2em"
        transition=".4s ease-in"
        _hover={{ transform: 'scale(1.25)' }}
      >
        FLEX
      </Heading>
    </Flex>
  );
};
export default Contact;
