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

const LoginForm = () => {
  return (
    <Flex w="full" h="full" justifyContent="center" alignItems="center">
      <Box
        w="512px"
        borderWidth="1px"
        borderRadius="lg"
        bgColor=""
        paddingX="6"
        paddingY="10"
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
            spacing={8}
          >
            {/* Email */}
            <FormControl>
              <FormLabel htmlFor="email-or-phone">Email or phone</FormLabel>
              <Input id="email-or-phone" placeholder="me@example.com" />
              <FormHelperText>
                <Link>Forgot email?</Link>
              </FormHelperText>
            </FormControl>
            {/* Password */}
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" placeholder="******" type="password" />
              <FormHelperText>
                <Link>Forgot password?</Link>
              </FormHelperText>
            </FormControl>
          </VStack>

          {/* Form Action Buttons */}
          <HStack w="80%">
            <Button colorScheme="twitter" variant="outline">
              Switch Accounts
            </Button>
            <Spacer />
            <Button colorScheme="twitter" variant="solid">
              Sign In
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Flex>
  )
}

export default LoginForm
