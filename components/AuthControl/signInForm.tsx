import {
  Avatar,
  Box,
  Flex,
  HStack,
  Link,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react'

import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <Flex w="full" h="full" justifyContent="center" alignItems="center">
      <Box
        w="512px"
        borderWidth="1px"
        borderRadius="lg"
        backgroundColor="white"
        bgColor=""
        paddingX="6"
        paddingY="10"
      >
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data)
          })}
        >
          <VStack spacing={12}>
            {/* Form Header */}
            <VStack spacing={6}>
              <Avatar
                size="2xl"
                name="Jeffery Erhunse"
                src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80"
              />
              <Flex direction="column" alignItems="center">
                <Text
                  fontSize="2xl"
                  color="gray.900"
                  style={{ fontWeight: 'bold' }}
                >
                  Welcome Back, Tsatsi
                </Text>
                <Text fontSize="md" color="gray.700">
                  Please login to continue
                </Text>
              </Flex>
            </VStack>

            {/* Form Inputs */}
            <VStack
              justifyContent="flex-start"
              w="80%"
              alignItems="center"
              spacing={6}
            >
              {/* Email */}
              <FormControl>
                <FormLabel htmlFor="email">Email or phone</FormLabel>
                <Input
                  {...register('email', { required: true })}
                  id="email"
                  placeholder="me@example.com"
                />
              </FormControl>
              {/* Password */}
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  {...register('password', { required: true })}
                  id="password"
                  placeholder="******"
                  type="password"
                />
              </FormControl>
            </VStack>

            {/* Form Action Buttons */}
            <HStack w="80%">
              <Button colorScheme="twitter" variant="ghost">
                Switch Accounts
              </Button>
              <Spacer />
              <Button colorScheme="twitter" variant="solid" type="submit">
                Sign In
              </Button>
            </HStack>
          </VStack>
        </form>
      </Box>
    </Flex>
  )
}

export default SignInForm
