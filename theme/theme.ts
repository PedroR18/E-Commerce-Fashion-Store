import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
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
