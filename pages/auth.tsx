import type { NextPage } from 'next'
import Head from 'next/head'

import { VStack } from '@chakra-ui/react'

// Custom Components
import SignInForm from 'Components/AuthControl/signInForm'
import SignUpForm from 'Components/AuthControl/signUpForm'

const Auth: NextPage = () => {
  return (
    <>
      <VStack pos="relative" h="100vh">
        {/* <SignUpForm /> */}
        <SignInForm />
      </VStack>
    </>
  )
}

export default Auth
