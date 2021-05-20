import { Button, chakra, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { PasswordField } from './PasswordField'
import {signIn} from 'next-auth/client';

export const SignupForm = (props) => (
  <chakra.form
    onSubmit={(e) => {
      e.preventDefault();
      signIn();
    }}
    {...props}
  >
    <Stack spacing="6">
      <FormControl id="nome">
        <FormLabel>Nome</FormLabel>
        <Input name="nome" type="text" autoComplete="name" required />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input name="email" type="email" autoComplete="email" required />
      </FormControl>
      <PasswordField />
      <Button type="submit" bg='#E69A3E' _hover={{bg:"#E65A2E"}} size="lg" fontSize="md">
        Cadastrar
      </Button>
    </Stack>
  </chakra.form>
)
