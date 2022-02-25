import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import ExclusiveList from '../components/ExclusiveList';
import GenreSeparator from '../components/GenreSeparator';
import SideBar from '../components/SideBar';
import StoreFront from '../components/StoreFront';

const Home: NextPage = () => {
  const [isLargerThan375] = useMediaQuery('(min-height: 375px)');
  useEffect(() => {
    document.title = 'FLEX - Home';
  });

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      {isLargerThan375 ? (
        <Flex direction="column">
          <SideBar />
          <Banner />
          <StoreFront />
          <GenreSeparator />
          <ExclusiveList />
          <Contact />
        </Flex>
      ) : (
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Text>Invalid Resolution</Text>
          <Text textDecor="underline" cursor="pointer" onClick={refreshPage}>
            Refresh Page
          </Text>
        </Flex>
      )}
    </>
  );
};

export default Home;
