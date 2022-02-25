import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createContext, useEffect, useReducer, useState } from 'react';
import theme from '../theme/theme';
import { ContextType } from '../utilities/interface';
import { cartReducer } from '../utilities/reducers';

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Anurati';
      src: url('./Anurati-Regular.woff') format('woff');
    }
    @font-face {
      font-family: 'Oswald';
      src: url('./Oswald.woff') format('woff');
    }
     `}
  />
);
export const cartContext = createContext<ContextType>(undefined!);

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const data = localStorage.getItem('cart');
    if (data !== undefined) {
      cartDispatch({ type: 'setCart', payload: JSON.parse(data!) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState));
  });

  const [cartState, cartDispatch] = useReducer(cartReducer, undefined!);
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <cartContext.Provider value={{ cart: cartState, setCart: cartDispatch }}>
        <Head>
          <link
            rel="icon"
            id="favicon-icon"
            href={darkMode ? '/favicon-dark.ico' : '/favicon.ico'}
          />
        </Head>
        <Component {...pageProps} />
      </cartContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
