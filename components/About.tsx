import { Flex } from '@chakra-ui/react';

const About = () => {
  return (
    <Flex
      height="100vh"
      width="100vw"
      scrollSnapAlign="start"
      bgColor="green"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <p>About</p>
      <p>Put that square image things that animates on scroll in the center</p>
    </Flex>
  );
};
export default About;
