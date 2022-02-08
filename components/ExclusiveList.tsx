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
  const [position, setPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY / 4 === window.innerHeight) {
        setPosition(window.innerHeight);
      } else setPosition(0);
    });
  }, []);

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
      gridTemplateColumns="1fr auto 1fr"
      gridTemplateRows="100%"
      alignItems="center"
      direction="row"
      position="relative"
    >
      <GridItem
        height="100%"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text height="750px" width="300px" textAlign="justify">
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
          aspernatur fugiat dolore error quam. Laboriosam. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Assumenda, doloribus eaque quae
          amet, culpa, possimus placeat sint cupiditate tempore officiis
          inventore illum laboriosam. Nisi tempore in quasi temporibus magnam
          expedita? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Sapiente, hic exercitationem laborum consequatur quasi saepe.
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
        src="/exclusive-texture-1.png"
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
            transform: position
              ? `translate(0px, ${position}px) scale(1.3)`
              : 'none',
            color: position ? 'white' : 'black',
          }}
          zIndex={100}
        >
          FLEX
        </Heading>
      </GridItem>
    </Grid>
  );
};
export default ExclusiveList;
