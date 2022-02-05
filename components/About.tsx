import { Box, Fade, Flex, Image } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import AboutGrid from './AboutGrid';

const About = () => {
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
    <Flex
      height="100vh"
      width="100vw"
      scrollSnapAlign="start"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Box height="750px" width="750px" position="relative">
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
        <AboutGrid />
        <Fade in={reveal}>
          <Image
            src="/about-grid-1.jpg"
            alt="!!PLACEHOLDER!!"
            filter="grayscale(1)"
            position="absolute"
            top={0}
            visibility={reveal ? 'visible' : 'hidden'}
            willChange="transform"
            clipPath={`circle(20% at ${maskPosition.x}px ${maskPosition.y}px)`}
            maxHeight="750px"
          />
        </Fade>
      </Box>
    </Flex>
  );
};
export default About;
