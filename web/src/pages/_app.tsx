import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <Head>
          <title>Game News - The latest news about games worldwide</title>
          <link rel="shortcut icon" href="/img/main-logo.svg" />
          <link rel="apple-touch-icon" href="/img/main-logo.svg" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  )
}

export default App
