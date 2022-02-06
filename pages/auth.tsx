import type { NextPage } from 'next'
import Head from 'next/head'

import { VStack } from '@chakra-ui/react'

// Custom Components
import LoginForm from 'Components/AuthControl/signInForm'

const Auth: NextPage = () => {
  return (
    <>
      <VStack pos="relative" h="100vh">
        <LoginForm />
      </VStack>
    </>
  )
}

export default Auth
