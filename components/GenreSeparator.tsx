import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

const GenreSeparator = () => {
  const [active, setActive] = useState<'left' | 'right' | undefined>(undefined);
  return (
    <Flex width="100vw" height="100vh" scrollSnapAlign="start">
      <Flex
        width="50vw"
        justifyContent="center"
        alignItems="center"
        position="relative"
        cursor="pointer"
        onMouseOver={() => setActive('left')}
        onMouseLeave={() => setActive(undefined)}
      >
        <Box
          position="absolute"
          zIndex={-10}
          width="50vw"
          height="100vh"
          overflow="hidden"
        >
          <Image
            src="/home-female.png"
            alt="female"
            align="0 -340px"
            transform={active === 'left' ? 'scale(1.1)' : 'none'}
            transition=".2s ease-in"
          />
        </Box>

        <Text
          fontSize="7em"
          color="blackAlpha.800"
          textDecoration={active === 'left' ? 'none' : 'underline'}
          textDecorationColor="blackAlpha.800"
          position="absolute"
          style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}
          right={10}
          bottom={6}
          transition="transform .2s ease-in"
          transform={active === 'left' ? 'scale(1.05)' : 'none'}
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
        onMouseOver={() => setActive('right')}
        onMouseLeave={() => setActive(undefined)}
      >
        <Box
          position="absolute"
          zIndex={-10}
          width="50vw"
          height="100vh"
          overflow="hidden"
        >
          <Image
            src="/home-male.png"
            alt="male"
            align="0 -400px"
            transform={active === 'right' ? 'scale(1.1)' : 'none'}
            transition=".2s ease-in"
          />
        </Box>
        <Text
          color="blackAlpha.800"
          textDecoration={active === 'right' ? 'none' : 'underline'}
          textDecorationColor="blackAlpha.800"
          fontSize="7em"
          position="absolute"
          left={10}
          top={6}
          style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}
          transition="transform .2s ease-in"
          transform={active === 'right' ? 'scale(1.05)' : 'none'}
        >
          HIM
        </Text>
      </Flex>
    </Flex>
  );
};
export default GenreSeparator;
