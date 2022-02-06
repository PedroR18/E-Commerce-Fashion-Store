import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import theme from '../theme/theme';

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Anurati';
      src: url('./Anurati-Regular.woff') format('woff');
    }
     `}
  />
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
