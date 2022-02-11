import { useState } from 'react'

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

import { useForm } from 'react-hook-form'

const SignUpForm = () => {
  const [passwordShown, setPasswordShown] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <Flex w="full" h="full" justifyContent="center" alignItems="center">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data)
        })}
      >
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
                  <FormControl isRequired>
                    <FormLabel htmlFor="first-name">First name</FormLabel>
                    <Input
                      {...register('firstName', { required: true })}
                      id="first-name"
                      placeholder=""
                      type="text"
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="last-name">Last name</FormLabel>
                    <Input
                      {...register('lastName', { required: true })}
                      id="last-name"
                      placeholder=""
                      type="text"
                    />
                  </FormControl>
                </HStack>
                <FormControl isRequired>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    {...register('email', { required: true })}
                    id="email"
                    placeholder=""
                    type="email"
                  />
                </FormControl>
                <Flex justifyContent="left" direction="column" w="full">
                  <HStack spacing="6" w="full" mb="4">
                    <FormControl isRequired>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        {...register('password', { required: true })}
                        id="password"
                        placeholder="******"
                        type={passwordShown ? 'text' : 'password'}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="confirm-password">
                        Confirm password
                      </FormLabel>
                      <Input
                        id="confirm-password"
                        placeholder="******"
                        type={passwordShown ? 'text' : 'password'}
                      />
                    </FormControl>
                  </HStack>
                  <Checkbox
                    colorScheme="twitter"
                    value="1"
                    ml="2"
                    onChange={(e) =>
                      setPasswordShown((prevState) => {
                        return prevState ? false : true
                      })
                    }
                  >
                    Show password
                  </Checkbox>
                </Flex>
                <HStack w="full" pt="10">
                  <Button colorScheme="twitter" variant="ghost">
                    Sign in instead
                  </Button>
                  <Spacer />
                  <Button colorScheme="twitter" variant="solid" type="submit">
                    Next
                  </Button>
                </HStack>
              </VStack>
            </Box>

            <Box w="25%" backgroundColor="red.50"></Box>
          </HStack>
        </Box>
      </form>
    </Flex>
  )
}

export default SignUpForm
