import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react'

import { BellIcon, SearchIcon } from '@chakra-ui/icons'

const AppBar = () => {
  return (
    <Box
      pos="absolute"
      top="0"
      left="0"
      w="100vw"
      boxShadow="xs"
      p={4}
      rounded="md"
      bg="white"
    >
      <HStack>
        {/* Logo */}
        <Box w="20vw" paddingX={6}>
          <Text fontSize="xl">Civic Schools</Text>
        </Box>
        <Spacer />

        {/* Search bar */}
        <Box w="60vw">
          <InputGroup size="lg">
            <Input variant="filled" placeholder="Search" />

            <InputRightElement width="4.5rem">
              <Button p={0} borderRadius="full" size="sm">
                <SearchIcon />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Spacer />

        {/* Notifications and Avatar */}
        <Box w="20vw" paddingX={6}>
          <HStack spacing={6} justify="flex-end">
            <Button p={0} borderRadius="full">
              <BellIcon w={7} h={7} color="gray.500" />
            </Button>
            <Button p={0} borderRadius="full">
              <Avatar bg="gray.400" size="sm" />
            </Button>
          </HStack>
        </Box>
      </HStack>
    </Box>
  )
}

export default AppBar
