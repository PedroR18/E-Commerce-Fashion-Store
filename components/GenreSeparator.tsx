import { Box, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';
import { useState } from 'react';

const GenreSeparator = () => {
  const [active, setActive] = useState<'left' | 'right' | undefined>(undefined);
  const [isLargerThan1700] = useMediaQuery('(min-width: 1700px)');
  const [isLargerThan1900] = useMediaQuery('(min-width: 1900px)');
  return (
    <Flex
      width="100vw"
      height="100vh"
      scrollSnapAlign="start"
      direction={['column', 'column', 'column', 'row']}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        position="relative"
        cursor="pointer"
        onMouseOver={() => setActive('left')}
        onMouseLeave={() => setActive(undefined)}
        width={['100vw', '100vw', '100vw', '50vw']}
        height={['50vh', '50vh', '50vh', '100vh']}
      >
        <Box
          position="absolute"
          zIndex={-10}
          overflow="hidden"
          width="100%"
          height="100%"
          minHeight={['50vh', '50vh', '50vh', '100vh']}
        >
          <Image
            align={
              isLargerThan1900
                ? '0 -300px'
                : isLargerThan1700
                ? '0 -100px'
                : ['0 0', '0 -150px', '0 -250px', '-100px 0', '0 0', '0 0']
            }
            src="/home-female.png"
            alt="female"
            minHeight="100%"
            objectFit="cover"
            transform={active === 'left' ? 'scale(1.1)' : 'none'}
            transition=".2s ease-in"
          />
        </Box>

        <Text
          fontSize={['3em', '4em', '4em', '7em']}
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
        justifyContent="center"
        alignItems="center"
        position="relative"
        cursor="pointer"
        onMouseOver={() => setActive('right')}
        onMouseLeave={() => setActive(undefined)}
        width={['100vw', '100vw', '100vw', '50vw']}
        height={['50vh', '50vh', '50vh', '100vh']}
      >
        <Box
          position="absolute"
          zIndex={-10}
          overflow="hidden"
          width="100%"
          height="100%"
          minHeight={['50vh', '50vh', '50vh', '100vh']}
        >
          <Image
            src="/home-male.png"
            alt="male"
            align={
              isLargerThan1900
                ? '0 -350px'
                : isLargerThan1700
                ? '0 -200px'
                : ['0 0', '0 -150px', '0 -350px', '0 0', '0 0', '0 -150px']
            }
            minHeight="100%"
            objectFit="cover"
            transform={active === 'right' ? 'scale(1.1)' : 'none'}
            transition=".2s ease-in"
          />
        </Box>
        <Text
          color="blackAlpha.800"
          textDecoration={active === 'right' ? 'none' : 'underline'}
          textDecorationColor="blackAlpha.800"
          fontSize={['3em', '4em', '4em', '7em']}
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
