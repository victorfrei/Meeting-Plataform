

import { Box, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const TopNav = (props) => (
  <Box
    bg={useColorModeValue('white', 'gray.700')}
    py="4"
    px={{
      base: '4',
      md: '10',
    }}
    shadow="base"
    display='flex'
    flexDir='row'
    justifyContent='space-between'
    alignItems='center'
    {...props}
  />
)
