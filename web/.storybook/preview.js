import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { ChakraProvider } from '@chakra-ui/react'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <GlobalStyles />
        <Story />
      </ChakraProvider>
    </ThemeProvider>
  )
]
