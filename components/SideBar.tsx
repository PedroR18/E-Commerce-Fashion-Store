import { Box, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

interface Slide {
  value: number;
  position: number;
}

const SideBar = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slides, setSlides] = useState<Slide[]>([]);

  const scrollFun = (to: number) => {
    if (typeof window !== undefined) {
      if (to === 0) {
        setActiveSlide(0);
      } else if (to === window.innerHeight) {
        setActiveSlide(1);
      } else if (to === window.innerHeight * 2) {
        setActiveSlide(2);
      } else if (to === window.innerHeight * 3) {
        setActiveSlide(3);
      } else if (to === window.innerHeight * 4) {
        setActiveSlide(4);
      }
      window.scrollTo(0, to);
    }
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      setSlides([
        { value: 0, position: 0 },
        { value: 1, position: window.innerHeight },
        { value: 2, position: window.innerHeight * 2 },
        { value: 3, position: window.innerHeight * 3 },
        { value: 4, position: window.innerHeight * 4 },
      ]);
      if (typeof window !== undefined) {
        window.addEventListener('scroll', () => {
          if (window.scrollY === 0) {
            setActiveSlide(0);
          } else if (window.scrollY === window.innerHeight) {
            setActiveSlide(1);
          } else if (window.scrollY / 2 === window.innerHeight) {
            setActiveSlide(2);
          } else if (window.scrollY / 3 === window.innerHeight) {
            setActiveSlide(3);
          } else if (window.scrollY / 4 === window.innerHeight) {
            setActiveSlide(4);
          }
        });
      }
    }

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex
      bgColor="blackAlpha.700"
      width={['50px', '50px', '100px']}
      height="100vh"
      position="fixed"
      left={0}
      justifyContent="center"
      zIndex={100000}
      transition=".3s ease-in"
      visibility={['hidden', 'hidden', 'visible']}
    >
      <Flex
        style={{
          transform: 'rotate(-90deg) translateX(0) translateZ(0)',
        }}
        height="100px"
        textAlign="end"
        direction="column"
        justifyContent="center"
        position="absolute"
        top={0}
      >
        <Text color="white" _hover={{ color: 'black' }} cursor="pointer">
          FACEBOOK
        </Text>
        <Text color="white" _hover={{ color: 'black' }} cursor="pointer">
          TWITTER
        </Text>
        <Text color="white" _hover={{ color: 'black' }} cursor="pointer">
          INSTAGRAM
        </Text>
        <Text color="white" _hover={{ color: 'black' }} cursor="pointer">
          LINKEDIN
        </Text>
      </Flex>

      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        bottom={10}
        gap={2}
      >
        {slides.map((slide) => {
          return activeSlide === slide.value ? (
            <FaCircle color="white" key={Math.random()} />
          ) : (
            <Box
              onClick={() => {
                scrollFun(slide.position);
              }}
              key={Math.random()}
              zIndex="1000"
            >
              <FaRegCircle color="white" cursor="pointer" />
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};
export default SideBar;
