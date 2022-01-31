import type { NextPage } from 'next'
import Head from 'next/head'

import { VStack } from '@chakra-ui/react'

// Custom Components
import AppBar from 'Components/AppBar'
import Footer from 'Components/Footer'

const Dashboard: NextPage = () => {
  return (
    <>
      <VStack h="100vh">
        <AppBar />
        <Footer />
      </VStack>
    </>
  )
}

export default Dashboard
