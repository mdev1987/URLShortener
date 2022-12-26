import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HandleRedirect from './pages/HandleRedirect';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
        <Route path='/:shortId' element={<HandleRedirect />} />
          <Route path='/' element={<Home />} />          
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
