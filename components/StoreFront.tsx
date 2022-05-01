import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const scrollFun = (to: number) => {
  if (typeof window !== undefined) {
    window.scrollTo(0, to);
  }
};

const StoreFront = () => {
  const router = useRouter();
  const [pageHeight, setPageHeight] = useState(0);
  const [fullContent, setFullContent] = useState(true);

  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');

  useEffect(() => {
    setPageHeight(window.innerHeight);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!isLargerThan1200) {
      setFullContent(false);
    } else {
      setFullContent(true);
    }
  });

  return (
    <Flex height="100vh" width="100vw" scrollSnapAlign="start">
      <Flex
        direction="column"
        height="100vh"
        position="absolute"
        left={0}
        visibility={fullContent ? 'visible' : 'hidden'}
        width={['30vw', '30vw', '30vw', '30vw', '30vw', '450px', '600px']}
      >
        <Image
          height="50%"
          width="100%"
          maxHeight="50%"
          alt="Female Model"
          src="/store-front-female.webp"
          objectFit="cover"
          loading="eager"
        />
        <Flex width="100%" height="50%">
          <Image
            height="130%"
            width="30%"
            alt="Red Roses"
            src="/store-front-flowers.webp"
            objectFit="cover"
            maxHeight="130%"
            position="relative"
            bottom="30%"
            loading="eager"
          />
          <Image
            height="100%"
            width="70%"
            alt="Paper Texture"
            src="/store-front-paper.webp"
            objectFit="cover"
            maxHeight="100%"
            loading="eager"
          />
        </Flex>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        direction="column"
        position="relative"
        height="100vh"
        width="100vw"
      >
        <Image
          alt="Floral Background"
          src="/store-front-main.webp"
          position="absolute"
          height="100%"
          objectFit="cover"
          width="100%"
          zIndex={-10}
        />
        <Flex
          gap={12}
          justifyContent="center"
          alignItems="center"
          direction="column"
          width="100vw"
          height="100vh"
          position="relative"
          padding={10}
          zIndex={100}
        >
          <Heading
            fontSize={['4.5em', '5em', '6em', '6.5em', '6.5em', '8em']}
            letterSpacing=".5em"
            marginLeft=".6em"
          >
            FLEX
          </Heading>
          <Text fontSize="2.5em" textAlign="center">
            DRESS TO IMPRESS
          </Text>
          <Text
            textAlign="center"
            fontSize="1.5em"
            width={['90%', '80%', '70%', '450px', '450px', '500px']}
          >
            Your appearance is a reflection of who you are. So make a statement
            and show your true self...
          </Text>
          <Text
            fontSize="1.5em"
            cursor="pointer"
            fontWeight="bold"
            borderBottom="2px solid black"
            transition=".4s ease-in"
            _hover={{ transform: 'scale(1.1)' }}
            onClick={() => router.push('/store')}
          >
            Shop new arrivals
          </Text>
        </Flex>
        <Box
          position="absolute"
          bottom={20}
          cursor="pointer"
          onClick={() =>
            window.scrollTo({ top: 2000, left: 0, behavior: 'smooth' })
          }
        >
          <AiOutlineDown size={50} />
        </Box>
      </Flex>
      <Flex
        direction="column"
        height="100vh"
        width={['30vw', '30vw', '30vw', '30vw', '30vw', '450px', '600px']}
        position="absolute"
        right={0}
        visibility={fullContent ? 'visible' : 'hidden'}
      >
        <Flex height="10%" width="100%" position="relative">
          <Image
            height="300px"
            zIndex={10}
            width="30%"
            alt="Tropical Vegetation"
            src="/store-front-tropical.webp"
            objectFit="cover"
            loading="eager"
            position="absolute"
            top={0}
          />
          <Flex
            height="100%"
            width="70%"
            direction="column"
            position="absolute"
            top={0}
            right={[0, 0, 0, -4, -2, -4, -4]}
          >
            <Flex
              height="50%"
              width="100%"
              justifyContent="start"
              alignItems="center"
              gap={8}
              top={0}
              right={0}
              zIndex="100"
            >
              <Text
                fontSize={['1em', '1em', '1em', '1em', '1.2em', '1.3em']}
                borderBottom="1px solid black"
                cursor="pointer"
                _hover={{
                  transform: 'scale(1.2)',
                  transition: '.3s ease-in',
                }}
                onClick={() => {
                  scrollFun(pageHeight * 2);
                }}
                position={fullContent ? 'initial' : 'absolute'}
              >
                STORE
              </Text>
              <Text
                fontSize={['1em', '1em', '1em', '1em', '1.2em', '1.3em']}
                borderBottom="1px solid black"
                cursor="pointer"
                _hover={{
                  transform: 'scale(1.2)',
                  transition: '.3s ease-in',
                }}
                onClick={() => {
                  scrollFun(pageHeight * 3);
                }}
                position={fullContent ? 'initial' : 'absolute'}
              >
                EXCLUSIVE
              </Text>
              <Text
                fontSize={['1em', '1em', '1em', '1em', '1.2em', '1.3em']}
                borderBottom="1px solid black"
                cursor="pointer"
                _hover={{
                  transform: 'scale(1.2)',
                  transition: '.3s ease-in',
                }}
                onClick={() => {
                  scrollFun(pageHeight * 4);
                }}
                position={fullContent ? 'initial' : 'absolute'}
              >
                CONTACT
              </Text>
            </Flex>
            <Image
              src="lines.svg"
              alt="lines"
              position="absolute"
              right={[0, 0, 0, 0, -16, -10]}
              bottom={[-20, -20, -20, -16, -16, -100]}
              loading="eager"
              zIndex={10}
            />
          </Flex>
        </Flex>
        <Image
          src="store-front-paper.webp"
          alt="Paper Texture"
          objectFit="cover"
          height="40%"
          width="30%"
          position="absolute"
          right={0}
          top="50%"
          loading="eager"
        />
        <Image
          height="90%"
          width="100%"
          src="store-front-male.webp"
          alt="Male Model"
          objectFit="cover"
          maxHeight="90%"
          loading="eager"
        />
      </Flex>
    </Flex>
  );
};
export default StoreFront;
