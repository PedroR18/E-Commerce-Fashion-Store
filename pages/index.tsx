import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import About from '../components/About';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
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
      <About />
      <Contact />
    </Flex>
  );
};

export default Home;
