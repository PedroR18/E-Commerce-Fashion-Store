import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { useState } from 'react';

const Banner = () => {
  const [active, setActive] = useState(false);

  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      scrollSnapAlign="start"
      alignItems="center"
    >
      <Box
        width="100vw"
        height="100vh"
        minHeight="100vh"
        minwidth="100vw"
        overflow="hidden"
      >
        <Image
          src="/banner.png"
          alt="Model"
          minHeight="100%"
          minWidth="100%"
          objectFit="cover"
          height="100%"
          width="100%"
        />
      </Box>
      <Flex
        position="absolute"
        onMouseOver={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <Heading
          color={active ? 'white' : 'transparent'}
          fontSize={['4em', '6em', '7em', '11em']}
          letterSpacing=".5em"
          marginLeft=".5em"
          transition=".4s ease-in"
          zIndex={100}
          style={{
            WebkitTextStrokeWidth: active ? '0' : '1px',
            WebkitTextStrokeColor: 'white',
            transform: active ? 'scale(1.25)' : '',
          }}
        >
          FLEX
        </Heading>
      </Flex>
    </Flex>
  );
};
export default Banner;
