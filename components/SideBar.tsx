import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

const SideBar = () => {
  const scrollFun = (to: number) => {
    window.scrollTo(0, to);
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    { value: 0, position: 0 },
    { value: 1, position: window.innerHeight },
    { value: 2, position: window.innerHeight * 2 },
    { value: 3, position: window.innerHeight * 3 },
    { value: 4, position: window.innerHeight * 4 },
  ];

  useEffect(() => {
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
  }, []);

  return (
    <Flex
      bgColor="blackAlpha.600"
      width="100px"
      height="100vh"
      position="fixed"
      left={0}
      justifyContent="center"
      zIndex={100}
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
          PINTAREST
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
            <FaCircle color="white" />
          ) : (
            <FaRegCircle
              color="white"
              cursor="pointer"
              onClick={() => {
                scrollFun(slide.position);
              }}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};
export default SideBar;
