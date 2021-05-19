import { Button, chakra, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { PasswordField } from './PasswordField'

export const LoginForm = (props) => (
  <chakra.form
    onSubmit={(e) => {
      e.preventDefault() // your login logic here
    }}
    {...props}
  >
    <Stack spacing="6">
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input name="email" type="email" autoComplete="email" required />
      </FormControl>
      <PasswordField />
      <Button type="submit" bg='#E69A3E' _hover={{bg:"#E65A2E"}} size="lg" fontSize="md">
        Login
      </Button>
    </Stack>
  </chakra.form>
)
