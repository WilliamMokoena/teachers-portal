import { Box, Container, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box pos="absolute" bottom="0" left="0" w="100vw" bgColor="gray.100" p="4">
      <Container centerContent>
        <Text fontSize="md" color="gray">
          Civic Schools proudly made in 🇿🇦 by SW Mokoena
        </Text>
      </Container>
    </Box>
  )
}

export default Footer
