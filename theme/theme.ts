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
        scrollBehavior: 'smooth',
      },
      '.swiper-button-next': { color: 'black' },
      '.swiper-button-prev': { color: 'black' },
      '.swiper-pagination-bullet-active': { bgColor: 'black' },
    },
  },
});

export default theme;
