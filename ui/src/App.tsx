import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import URLShortenerForm from './components/URLShortenerForm';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <URLShortenerForm/>
      </div>
    </ChakraProvider>
  );
}

export default App;
