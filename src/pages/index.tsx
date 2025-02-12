import { Box, Container, Heading, Text, VStack, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack p={8} align="center">
        <Heading as="h1" size="2xl">
          Welcome to Next.js with Chakra UI
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Get started by editing pages/index.tsx
        </Text>
        <Box>
          <Button colorScheme="brand" size="lg">
            Get Started
          </Button>
        </Box>
      </VStack>
    </Container>
  );
} 