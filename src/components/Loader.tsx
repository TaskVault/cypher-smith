import React from 'react'
import { Box, Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <Box w="full" textAlign="center" p={12}>
      <Spinner size={'lg'} />
      <Box mt={3}>Loading</Box>
    </Box>
  )
}

export default Loader
