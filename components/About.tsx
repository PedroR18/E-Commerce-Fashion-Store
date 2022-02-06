import { Box, Fade, Flex, Image, Text } from '@chakra-ui/react';
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
      justifyContent="space-around"
      alignItems="center"
      direction="row"
    >
      <Box height="750px" width="300px">
        <Text height="100%" width="100%" textAlign="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          praesentium unde numquam ea autem, iure quam eos vero molestiae
          incidunt illum, quia, cum placeat tempora hic corporis est ex. Natus?
          Voluptatem sequi, error veniam nihil eos esse distinctio reprehenderit
          quos consequuntur incidunt nesciunt rem, repellat nemo explicabo?
          Voluptatibus blanditiis iste quam voluptatem molestias iusto atque
          esse itaque pariatur, repudiandae possimus! Ad earum quis tempora a
          mollitia suscipit animi enim, iure praesentium incidunt quaerat eius
          exercitationem! Voluptas, eveniet iusto. Velit, explicabo! Eaque vero
          ab quia unde beatae inventore. Beatae, perferendis. Fugit? Harum,
          tenetur porro sint quas cumque fugiat tempore incidunt officia? Enim,
          repellendus ea illo id laudantium porro rerum alias illum nostrum
          aperiam deleniti reiciendis consectetur maxime aut odio harum nobis.
          Repudiandae quo voluptatum vel, distinctio autem fuga vitae reiciendis
          ratione odit, deserunt temporibus nihil, perspiciatis voluptatibus
          accusamus! Delectus optio eos, debitis velit voluptatem corrupti
          aspernatur fugiat dolore error quam. Laboriosam.
        </Text>
      </Box>
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
            src="/about-grid-1.png"
            alt="!!PLACEHOLDER!!"
            position="absolute"
            top={0}
            visibility={reveal ? 'visible' : 'hidden'}
            willChange="transform"
            clipPath={`circle(20% at ${maskPosition.x}px ${maskPosition.y}px)`}
            maxHeight="750px"
            minWidth="100%"
          />
        </Fade>
      </Box>
      <Box
        height="750px"
        width="300px"
        style={{
          transform: 'rotate(-90deg) translateX(0) translateZ(0)',
          transformOrigin: 'right',
        }}
      >
        <Text fontSize="8em">TEXT</Text>
      </Box>
    </Flex>
  );
};
export default About;
