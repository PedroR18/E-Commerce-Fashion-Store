import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Banner from '../components/Banner';
import StoreFront from '../components/StoreFront';

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Banner />
      <StoreFront />
    </Flex>
  );
};

export default Home;
