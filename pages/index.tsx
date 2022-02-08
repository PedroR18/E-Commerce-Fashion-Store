import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import ExclusiveList from '../components/ExclusiveList';
import GenreSeparator from '../components/GenreSeparator';
import SideBar from '../components/SideBar';
import StoreFront from '../components/StoreFront';

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <SideBar />
      <Banner />
      <StoreFront />
      <GenreSeparator />
      <ExclusiveList />
      <Contact />
    </Flex>
  );
};

export default Home;
