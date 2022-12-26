import React, { ReactNode, useEffect } from 'react'
import { Box } from '@chakra-ui/react';

function getWindowDimension() {
    const { innerWidth: width, innerHeight: heigth } = window;
    return {
        width, heigth
    }
}

type Props = {
    children?: ReactNode
}
const random = Math.random();
function Background(props: Props) {
    const [windowDimension, setWindowDimension] = React.useState(getWindowDimension())
    useEffect(() => {
        function handleResize() {
            setWindowDimension(getWindowDimension())
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    const { width, heigth } = windowDimension;
    const img = `https://picsum.photos/seed/${random}/${width}/${heigth}.webp?blur=3`;
    return (        
            <Box height="100vh"
                display="flex"
                backgroundColor="transparent"
                justifyContent="center"
                alignItems="center"
                backgroundImage={img}
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundSize="cover">
                {props.children}
            </Box>        
    )
}

export default Background