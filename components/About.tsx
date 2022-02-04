import { Box, Flex, Image } from '@chakra-ui/react';
import AboutGrid from './AboutGrid';

const About = () => {
  return (
    <Flex
      height="100vh"
      width="100vw"
      scrollSnapAlign="start"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Box height="750px" width="750px" position="relative">
        <AboutGrid />
        <Image
          src="/about-grid-1.jpg"
          alt="!!PLACEHOLDER!!"
          filter="grayscale(1)"
          position="absolute"
          top={0}
          visibility="hidden"
        />
      </Box>
    </Flex>
  );
};
export default About;
