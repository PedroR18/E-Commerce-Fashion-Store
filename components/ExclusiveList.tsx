import {
  Box,
  Fade,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import ExclusiveListGrid from './ExclusiveListGrid';

const ExclusiveList = () => {
  const [reveal, setReveal] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setCoordinates = (mouse: MouseEvent) => {
      setMaskPosition({
        x: mouse.offsetX,
        y: mouse.offsetY,
      });
    };

    ref.current!.addEventListener('mousemove', (mouse) => {
      window.requestAnimationFrame(() => {
        setCoordinates(mouse);
      });
    });
  }, []);

  return (
    <Grid
      justifyContent="center"
      height="100vh"
      width="100vw"
      scrollSnapAlign="start"
      gridTemplateColumns="100px 1fr auto 1fr"
      gridTemplateRows="100%"
      alignItems="center"
      direction="row"
      position="relative"
    >
      <GridItem height="100%" width="100px" />
      <GridItem
        height="50%"
        width="60%"
        display="flex"
        alignItems="start"
        justifyContent="center"
        flexDirection="column"
        margin="0 auto"
        gap={2}
      >
        <Text fontSize="4em" lineHeight="1.2em">
          GET THE NEW COLLECTION FIRST
        </Text>
        <Text fontSize="2em" color="blackAlpha.800">
          Join a select group of 25 lucky members
        </Text>
        <Text
          fontSize="1.5em"
          cursor="pointer"
          fontWeight="bold"
          borderBottom="2px solid black"
          transition=".4s ease-in"
          _hover={{ transform: 'scale(1.1)' }}
        >
          Join Waiting List
        </Text>
      </GridItem>

      <GridItem height="750px" width="750px" position="relative">
        <Box
          position="absolute"
          height="100%"
          width="100%"
          zIndex={10}
          onMouseOver={(e) => {
            setReveal(true);
          }}
          onMouseOut={() => setReveal(false)}
          ref={ref}
        />
        <ExclusiveListGrid />
        <Fade in={reveal}>
          <Image
            src="/ex-list-grid.png"
            alt="Man with golden chain"
            position="absolute"
            top={0}
            visibility={reveal ? 'visible' : 'hidden'}
            willChange="transform"
            clipPath={`circle(20% at ${maskPosition.x}px ${maskPosition.y}px)`}
            maxHeight="750px"
            minWidth="100%"
          />
        </Fade>
      </GridItem>
      <Image
        src="/exclusive-texture.png"
        alt="Rose"
        height="800px"
        width="500px"
        objectFit="cover"
        zIndex={-5}
        position="absolute"
        top={0}
        right={60}
      />

      <GridItem height="750px" width="100%" position="relative">
        <Heading
          fontSize="9em"
          letterSpacing=".5em"
          position="absolute"
          bottom={0}
          left={150}
          transition=".4s ease-in"
          style={{
            color: 'black',
          }}
          zIndex={100}
          _hover={{ transform: 'scale(1.25)' }}
        >
          FLEX
        </Heading>
      </GridItem>
    </Grid>
  );
};
export default ExclusiveList;
