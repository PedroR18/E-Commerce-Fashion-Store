import { Box, Fade, Flex, Image, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import ExclusiveListGrid from './ExclusiveListGrid';

const ExclusiveList = () => {
  const [reveal, setReveal] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setCoordinates = (mouse: any) => {
      setMaskPosition({
        x: mouse.layerX,
        y: mouse.layerY,
      });
    };

    ref.current!.addEventListener('mousemove', (mouse) => {
      window.requestAnimationFrame(() => {
        setCoordinates(mouse);
      });
    });
  }, []);

  return (
    <Flex
      justifyContent="center"
      height="100vh"
      width="100vw"
      scrollSnapAlign="start"
      alignItems="center"
      direction="column"
      position="relative"
    >
      <Flex
        alignItems="center"
        direction="column"
        justifyContent="space-around"
        height="100%"
        width="100%"
        gap={2}
      >
        <Flex
          width="90%"
          alignItems="center"
          justifyContent="center"
          direction="column"
          gap={2}
          marginTop={10}
        >
          <Text
            fontSize={['2.3em', '2.3em', '2.5em', '3.5em']}
            lineHeight="1.2em"
          >
            GET THE NEW COLLECTION FIRST
          </Text>
          <Text
            fontSize={['1.5em', '1.5em', '1.5em', '2em']}
            color="blackAlpha.800"
            textAlign="left"
          >
            Join a select group of 25 lucky members
          </Text>
          <Text
            fontSize={['1.2em', '1.2em', '1.2em', '1.5em']}
            cursor="pointer"
            fontWeight="bold"
            borderBottom="2px solid black"
            transition=".4s ease-in"
            _hover={{ transform: 'scale(1.1)' }}
          >
            Join Waiting List
          </Text>
        </Flex>

        <Flex
          height={['350px', '450px', '500px', '610px', '650px']}
          width={['350px', '450px', '500px', '610px', '650px']}
          position="relative"
          mt={[16, 16, 16, 0]}
          justifyContent="start"
          alignItems="center"
        >
          <Box
            position="absolute"
            height="100%"
            width="100%"
            zIndex={100}
            onMouseOver={(e) => {
              setReveal(true);
            }}
            onMouseOut={() => setReveal(false)}
            ref={ref}
          />
          <ExclusiveListGrid />
          <Fade in={reveal}>
            <Image
              src="/ex-list-grid.webp"
              alt="Man with golden chain"
              position="absolute"
              top={0}
              bottom={0}
              left={0}
              right={0}
              visibility={reveal ? 'visible' : 'hidden'}
              willChange="transform"
              clipPath={`circle(20% at ${maskPosition.x}px ${maskPosition.y}px)`}
              maxHeight="100%"
              minWidth="100%"
            />
          </Fade>
        </Flex>
        <Image
          src="/exclusive-texture.webp"
          alt="Rose"
          height={['500px', '800px', '800px', '800px', '1000px']}
          width={['300px', '500px', '500px', '500px', '700px']}
          objectFit="cover"
          zIndex={-100}
          position="absolute"
          transform={[
            'rotate(90deg)',
            'rotate(90deg)',
            'rotate(90deg)',
            'rotate(90deg)',
            'rotate(90deg)',
            'none',
          ]}
          right={[100, 10, 150, 10, 10, -36, 100]}
          top={[14, -16, -6, -40, -64, 0]}
        />
      </Flex>
    </Flex>
  );
};
export default ExclusiveList;
