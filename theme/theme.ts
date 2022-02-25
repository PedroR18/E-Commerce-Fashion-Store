import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
  '3xl': '106em',
  '4xl': '118em',
});

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
  breakpoints,
});

export default theme;
