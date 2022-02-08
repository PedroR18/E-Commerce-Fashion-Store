import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const scrollFun = (to: number) => {
  if (typeof window !== undefined) {
    window.scrollTo(0, to);
  }
};

const StoreFront = () => {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    setPageHeight(window.innerHeight);
  }, []);

  return (
    <Flex height="100vh" width="100vw" scrollSnapAlign="start">
      <Grid
        templateColumns="600px 1fr 600px"
        templateRows="1fr"
        width="100%"
        height="100%"
      >
        <Flex direction="column" height="100vh">
          <Image
            height="50%"
            width="100%"
            maxHeight="50%"
            alt="Female Model"
            src="/store-front-female.png"
            objectFit="cover"
            loading="eager"
          />
          <Flex width="100%" height="50%">
            <Image
              height="130%"
              width="30%"
              alt="Red Roses"
              src="/store-front-flowers.png"
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
              src="/store-front-paper.png"
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
        >
          <Image
            alt="Floral Background"
            src="/store-front-main.png"
            position="absolute"
            height="100%"
            objectFit="contain"
            width="100%"
            zIndex={-10}
          />
          <Flex
            gap={12}
            justifyContent="center"
            alignItems="center"
            direction="column"
            width="40%"
            height="700px"
            position="relative"
          >
            <Text fontSize="4em">DRESS TO IMPRESS</Text>
            <Text textAlign="center" fontSize="1.5em">
              Your appearance is a reflection of who you are. So make a
              statement and show your true self...
            </Text>
            <Text
              fontSize="1.5em"
              cursor="pointer"
              fontWeight="bold"
              borderBottom="2px solid black"
              transition=".4s ease-in"
              _hover={{ transform: 'scale(1.1)' }}
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
        <Flex direction="column" height="100vh" position="relative">
          <Flex height="10%" width="100%">
            <Image
              height="400%"
              zIndex={10}
              width="30%"
              alt="Tropical Vegetation"
              src="/store-front-tropical.png"
              objectFit="cover"
              loading="eager"
            />
            <Flex
              height="100%"
              width="70%"
              direction="column"
              position="relative"
            >
              <Flex
                height="50%"
                width="100%"
                justifyContent="start"
                alignItems="center"
                gap={8}
                marginLeft={10}
              >
                <Text
                  fontSize="1.2em"
                  borderBottom="1px solid black"
                  cursor="pointer"
                  _hover={{
                    transform: 'scale(1.2)',
                    transition: '.3s ease-in',
                  }}
                  onClick={() => {
                    scrollFun(pageHeight * 2);
                  }}
                >
                  STORE
                </Text>
                <Text
                  fontSize="1.2em"
                  borderBottom="1px solid black"
                  cursor="pointer"
                  _hover={{
                    transform: 'scale(1.2)',
                    transition: '.3s ease-in',
                  }}
                  onClick={() => {
                    scrollFun(pageHeight * 3);
                  }}
                >
                  EXCLUSIVE
                </Text>
                <Text
                  fontSize="1.2em"
                  borderBottom="1px solid black"
                  cursor="pointer"
                  _hover={{
                    transform: 'scale(1.2)',
                    transition: '.3s ease-in',
                  }}
                  onClick={() => {
                    scrollFun(pageHeight * 4);
                  }}
                >
                  CONTACT
                </Text>
              </Flex>
              <Image
                src="lines.svg"
                alt="lines"
                position="absolute"
                right="-16"
                bottom={-110}
                loading="eager"
                zIndex={-10}
              />
            </Flex>
          </Flex>
          <Image
            src="store-front-paper.png"
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
            src="store-front-male.png"
            alt="Male Model"
            objectFit="cover"
            maxHeight="90%"
            loading="eager"
          />
        </Flex>
      </Grid>
    </Flex>
  );
};
export default StoreFront;
