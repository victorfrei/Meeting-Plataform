import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { signIn } from 'next-auth/client'
import Head from 'next/head'
import * as React from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Card } from '../components/Card'
import { DividerWithText } from '../components/DividerWithText'
import { Link } from '../components/Link'
import { LoginForm } from '../components/LoginForm'

const login = () => (
  <Box
    minH="100vh"
    py="12"
    px={{
      base: '4',
      lg: '8',
    }}
  >
    <Box maxW="md" mx="auto">
    <Head><title>Login</title></Head>
      <Heading textAlign="center" size="xl" fontWeight="extrabold">
        Entrar na Conta
      </Heading>
      <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
        <Text as="span">Não tem conta?</Text>
        <Link href="/signup">Cadastre-se</Link>
      </Text>
      <Card borderRadius="10px">
        <LoginForm />
        <DividerWithText mt="6">ou continue com</DividerWithText>
        <SimpleGrid mt="6" columns={3} spacing="3">
          <Button onClick={()=>{signIn('facebook')}} color="currentColor" colorScheme='teal'>
            <VisuallyHidden>Login with Facebook</VisuallyHidden>
            <FaFacebook />
          </Button>
          <Button onClick={()=>{signIn('google')}} color="currentColor" colorScheme='teal' >
            <VisuallyHidden>Login with Google</VisuallyHidden>
            <FaGoogle />
          </Button>
          <Button onClick={()=>{signIn('github')}} color="currentColor" colorScheme='teal' >
            <VisuallyHidden>Login with Github</VisuallyHidden>
            <FaGithub />
          </Button>
        </SimpleGrid>
      </Card>
    </Box>
  </Box>
)


module.exports = login