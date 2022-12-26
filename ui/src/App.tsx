import { ChakraProvider, Box } from '@chakra-ui/react';
import URLShortenerForm from './components/URLShortenerForm';
import Background from './components/Background';

function App() {
  return (
    <ChakraProvider>      
        <Background>
          <URLShortenerForm />
        </Background>      
    </ChakraProvider>
  );
}

export default App;
