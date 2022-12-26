import React, { useState } from 'react'
import { Input, Button, Box, InputGroup } from '@chakra-ui/react'
import axios from 'axios'
import { HOST, SERVER_ENDPOINT } from '../config'

function URLShortenerForm() {
    const [destination, setDestination] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [shortURL, setShortURL] = useState<{
        shortId?: string
    }>({})

    const handleSubmit =
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            try {
                const response = await axios.post(`${SERVER_ENDPOINT}/api/url`, {
                    destination
                })
                setShortURL(response.data.shortUrl);
                setErrorMessage('');
            } catch (e: any) {
                setErrorMessage(e.response?.data?.message ?? e.message)
                setShortURL({});
            }
        }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDestination(event.target.value);
    }
    return (
        <Box
            pos='relative'
            borderRadius="5"
            padding="10"
            paddingBottom="5"
            zIndex="2"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            backgroundColor="white">
            <form onSubmit={handleSubmit}>
                <InputGroup>
                    <Input
                        autoFocus
                        onChange={(handleChange)}
                        placeholder="https://example.com"
                        marginRight="2"
                    />
                    <Button padding="5" type='submit'>Create URL</Button>
                </InputGroup>
                {errorMessage && (
                    <Box color='red'>{errorMessage}</Box>
                )
                }
            </form>
            <Box marginTop="5"
                color="darkblue"
                alignSelf="center"
                fontWeight="bold">
                {shortURL.shortId && (
                    <a href={`${HOST}/${shortURL?.shortId}`}>
                        {`${HOST}/${shortURL?.shortId}`}
                    </a>
                )}
            </Box>
        </Box>
    )
}

export default URLShortenerForm