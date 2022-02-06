import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Anurati',
    body: 'Oswald',
  },
  styles: {
    global: {
      html: {
        scrollSnapType: 'y mandatory',
        scrollSnapPointsY: 'repeat(100vh)',
        overflowX: 'hidden',
      },
    },
  },
});

export default theme;
