import { Flex, Box, HStack, Text, VStack, Spacer } from '@chakra-ui/react'

import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'

const SignUpForm = () => {
  return (
    <Flex w="full" h="full" justifyContent="center" alignItems="center">
      <Box
        w="3xl"
        borderWidth="1px"
        borderRadius="lg"
        backgroundColor="white"
        bgColor=""
        paddingX="6"
        paddingY="10"
      >
        <Text fontSize="2xl" mb="8">
          Create your account
        </Text>
        <HStack spacing="8">
          <Box w="75%" backgroundColor="">
            <VStack spacing="6">
              <HStack spacing="6" w="full">
                <FormControl>
                  <FormLabel htmlFor="first-name">First name</FormLabel>
                  <Input id="first-name" placeholder="" type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="last-name">Last name</FormLabel>
                  <Input id="last-name" placeholder="" type="text" />
                </FormControl>
              </HStack>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" placeholder="" type="email" />
              </FormControl>
              <Flex justifyContent="left" direction="column" w="full">
                <HStack spacing="6" w="full" mb="4">
                  <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input id="password" placeholder="******" type="password" />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="confirm-password">
                      Confirm password
                    </FormLabel>
                    <Input
                      id="confirm-password"
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                </HStack>
                <Checkbox colorScheme="twitter" value="1" ml="2">
                  Show password
                </Checkbox>
              </Flex>
              <HStack w="full" pt="10">
                <Button colorScheme="twitter" variant="ghost">
                  Sign in instead
                </Button>
                <Spacer />
                <Button colorScheme="twitter" variant="solid">
                  Next
                </Button>
              </HStack>
            </VStack>
          </Box>

          <Box w="25%" backgroundColor="red.50"></Box>
        </HStack>
      </Box>
    </Flex>
  )
}

export default SignUpForm
