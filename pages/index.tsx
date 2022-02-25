import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import ExclusiveList from '../components/ExclusiveList';
import GenreSeparator from '../components/GenreSeparator';
import SideBar from '../components/SideBar';
import StoreFront from '../components/StoreFront';

const Home: NextPage = () => {
  const [pageHeight, setPageHeight] = useState(1000);

  useEffect(() => {
    document.title = 'FLEX - Home';
  });

  useEffect(() => {
    window.addEventListener('resize', () => {
      setPageHeight(window.innerHeight);
    });
  });

  const refreshPage = () => {
    window.location.reload();
  };

  const generatePage = () => {
    if (pageHeight > 450) {
      return (
        <>
          <SideBar />
          <Banner />
          <StoreFront />
          <GenreSeparator />
          <ExclusiveList />
          <Contact />
        </>
      );
    } else
      return (
        <Box>
          <Text>Invalid Resolution</Text>
          <Text textDecor="underline" cursor="pointer" onClick={refreshPage}>
            Refresh Page
          </Text>
        </Box>
      );
  };

  return <Flex direction="column">{generatePage()}</Flex>;
};

export default Home;
