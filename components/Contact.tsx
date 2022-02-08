import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';

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
        src="/contact-background.png"
        alt="Background Texture"
        minHeight="100%"
        minWidth="100%"
        maxHeight="100vh"
        maxWidth="100vw"
        position="absolute"
        objectFit="cover"
      />
      <Flex
        height="500px"
        width="500px"
        bgColor="white"
        zIndex="10"
        justifyContent="center"
        gap={10}
        alignItems="center"
        direction="column"
        boxShadow="2xl"
        opacity=".7"
      >
        <Text fontSize="2.5em" letterSpacing=".2em">
          CONTACT US
        </Text>
        <FormControl
          width="80%"
          display="flex"
          flexDirection="column"
          gap={3}
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            gap={3}
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Input
              id="email"
              placeholder="EMAIL"
              transition=".5s ease-in"
              border="black solid 2px"
              borderColor="blackAlpha.800"
            />
            <Input
              id="name"
              placeholder="NAME"
              transition=".5s ease-in"
              border="black solid 2px"
              borderColor="blackAlpha.800"
            />
          </Flex>
          <Textarea
            id="message"
            placeholder="MESSAGE"
            resize="none"
            rows={6}
            transition=".5s ease-in"
            border="black solid 2px"
            borderColor="blackAlpha.800"
          />
          <Button
            letterSpacing=".2em"
            fontSize="1.2em"
            transition=".5s ease-in"
            border="black solid 2px"
            borderColor="blackAlpha.800"
            width="30%"
          >
            SEND
          </Button>
        </FormControl>
      </Flex>
      <Box position="absolute" right={50} bottom={0}></Box>
    </Flex>
  );
};
export default Contact;
