import { Flex, Grid, Image, Text } from '@chakra-ui/react';

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
            src="/store-front-female.jpg"
            objectFit="cover"
          />
          <Flex width="100%" height="50%">
            <Image
              height="100%"
              width="25%"
              alt="Paper Texture"
              src="/store-front-paper.jpg"
              objectFit="cover"
              maxHeight="100%"
            />
            <Image
              height="100%"
              width="75%"
              alt="Tropical Vegetation"
              src="/store-front-tropical.jpg"
              objectFit="cover"
              maxHeight="100%"
            />
          </Flex>
        </Flex>
        <Flex></Flex>
        <Flex direction="column" height="100vh" position="relative">
          <Flex height="10%" width="100%">
            <Image
              height="400%"
              zIndex={10}
              width="30%"
              alt="Tropical Vegetation"
              src="/store-front-tropical.jpg"
              objectFit="cover"
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
                bottom={-150}
              />
            </Flex>
          </Flex>
          <Image
            src="store-front-paper.jpg"
            alt="Paper Texture"
            objectFit="cover"
            height="40%"
            width="30%"
            position="absolute"
            right={0}
            top="50%"
          />
          <Image
            height="90%"
            width="100%"
            src="store-front-male.jpg"
            alt="Male Model"
            objectFit="cover"
            maxHeight="90%"
          />
        </Flex>
      </Grid>
    </Flex>
  );
};
export default StoreFront;
