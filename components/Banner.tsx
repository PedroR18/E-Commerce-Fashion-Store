import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Banner = () => {
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        setPosition(0);
      } else {
        setPosition(675);
      }
    });
  }, []);

  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      scrollSnapAlign="start"
      alignItems="center"
    >
      <Box width="100vw" height="100vh" overflow="hidden">
        <Image
          src="/banner.png"
          alt="Suit"
          minHeight="100vh"
          minWidth="100vh"
          align="0 -400px"
          objectFit="cover"
        />
      </Box>
      <Flex
        position="absolute"
        onMouseOver={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <Heading
          color={position ? 'black' : active ? 'white' : 'transparent'}
          fontSize="10em"
          letterSpacing=".5em"
          marginLeft=".5em"
          transition=".4s ease-in"
          zIndex={100}
          style={{
            WebkitTextStrokeWidth: active ? '0' : '1px',
            WebkitTextStrokeColor: position !== 0 ? 'black' : 'white',
            transform: position
              ? active
                ? `scale(1.05) translate(0px, ${position}px`
                : `translate(0px, ${position}px)`
              : active
              ? `scale(1.25) translate(0px, ${position}px)`
              : `translate(0px, ${position}px`,
          }}
          cursor="default"
        >
          FLEX
        </Heading>
      </Flex>
    </Flex>
  );
};
export default Banner;
