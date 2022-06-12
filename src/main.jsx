import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App'

const colors = {
  almostWhite: {
    100: '#FAFAFA'
  },
  mediumGray: {
    100: '#696969'
  },
  almostBlack: {
    100: '#141414'
  }
}

const theme = extendTheme({ colors })


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
