import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { AiOutlineDown } from 'react-icons/ai';

const StoreFront = () => {
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
            p={5}
            justifyContent="center"
            alignItems="center"
            direction="column"
            gap={14}
            width="40%"
          >
            <Heading>NAME</Heading>
            <Text textAlign="center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo
              rem eaque voluptatum iste rerum impedit dolorem officiis magnam
              exercitationem aut ut nesciunt quidem, autem, asperiores debitis,
              unde cupiditate quae. Illum mollitia architecto tempore dolores
              voluptatem quasi dolore, autem quod minima nihil ad ea dolorum
              voluptates voluptas cum officiis vitae sunt commodi quis velit
              magni! Quo necessitatibus hic tempore minima.
            </Text>
            <Button>Shop new arrivals</Button>
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
                gap={10}
                marginLeft={10}
              >
                <Text borderBottom="1px solid black">STORE</Text>
                <Text borderBottom="1px solid black">CONTACT</Text>
                <Text borderBottom="1px solid black">ABOUT</Text>
              </Flex>
              <Image
                src="lines.svg"
                alt="lines"
                position="absolute"
                right="-16"
                bottom={-110}
                loading="eager"
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
