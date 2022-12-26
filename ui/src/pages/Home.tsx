import { Box } from '@chakra-ui/react'
import React from 'react'
import Background from '../components/Background'
import URLShortenerForm from '../components/URLShortenerForm';

function Home() {
    return (
        <Box height="100vh" width="100vw"
            backgroundColor="#8EC5FC"
            backgroundImage="linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)">
            <Background>
                <URLShortenerForm />
            </Background>
        </Box>
    )
}

export default Home