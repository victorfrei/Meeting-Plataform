
import '../styles/globals.css';
import {Provider} from 'next-auth/client';
import {ChakraProvider} from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {
  return(
    
  <ChakraProvider>
  <Provider session={pageProps.session}>
   <Component {...pageProps} />
  </Provider>
  </ChakraProvider>
  )
}

export default MyApp
