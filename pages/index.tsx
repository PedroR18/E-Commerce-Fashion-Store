import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Banner from '../components/Banner';

const Home: NextPage = () => {
  return (
    <Flex>
      <Banner />
    </Flex>
  );
};

export default Home;
