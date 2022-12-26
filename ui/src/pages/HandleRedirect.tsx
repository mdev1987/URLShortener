import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { SERVER_ENDPOINT } from '../config';
import { Box, Spinner } from '@chakra-ui/react';


function HandleRedirect() {
    const [destination, setDestination] = useState<string | null>(null)
    const [errorMessage, setErrorMessage] = useState<string | null>();
    const { shortId } = useParams();

    useEffect(() => {
        axios
            .get(`${SERVER_ENDPOINT}/${shortId}`)
            .then(response => {
                setDestination(response.data.destination)
                setErrorMessage(null);
            }).catch(ex => {
                setErrorMessage(ex.response?.data?.message ?? ex.message)
                setDestination(null)
            })
    }, [shortId])

    useEffect(() => {
        destination && window.location.replace(destination);
    }, [destination])

    return (
        <Box
            height="100vh"
            width="100vw"
            backgroundColor="#8EC5FC"
            backgroundImage="linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"
            display="flex"
            justifyContent="center"
            alignItems="center">
            {
                (!destination && !errorMessage) ?
                    <Spinner /> : (errorMessage) ?
                        <Box
                            borderRadius="5"
                            padding="5"
                            backgroundColor="rgba(255,255,255,0.5)"
                            color="maroon"
                            fontWeight="bold">
                            <p>{errorMessage}</p>
                        </Box> : <></>
            }
        </Box>
    )
}

export default HandleRedirect