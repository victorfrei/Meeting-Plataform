import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import Head from 'next/head'
import * as React from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Card } from '../components/Card'
import { DividerWithText } from '../components/DividerWithText'
import { Link } from '../components/Link'
import { SignupForm } from '../components/SignupForm'

const signup = () => (
  <Box
    minH="100vh"
    py="12"
    px={{
      base: '4',
      lg: '8',
    }}
  >
    <Box maxW="md" mx="auto">
    <Head><title>Cadastro</title></Head>
      <Heading textAlign="center" size="xl" fontWeight="extrabold">
        Cadastra-se
      </Heading>
      <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
        <Text as="span">Já tem conta?</Text>
        <Link href="/login">Fazer Login</Link>
      </Text>
      <Card borderRadius="10px">
        <SignupForm />
        <DividerWithText mt="6">ou cadastra-se com</DividerWithText>
        <SimpleGrid mt="6" columns={3} spacing="3">
          <Button color="currentColor" colorScheme='teal'>
            <VisuallyHidden>Cadastrar com Facebook</VisuallyHidden>
            <FaFacebook />
          </Button>
          <Button color="currentColor" colorScheme='teal' >
            <VisuallyHidden>Cadastrar com Google</VisuallyHidden>
            <FaGoogle />
          </Button>
          <Button color="currentColor" colorScheme='teal' >
            <VisuallyHidden>Cadastrar com Github</VisuallyHidden>
            <FaGithub />
          </Button>
        </SimpleGrid>
      </Card>
    </Box>
  </Box>
)


module.exports = signup