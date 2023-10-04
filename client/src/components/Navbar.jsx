import { Flex, Heading, Text } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex
      padding="1% 15%"
      justifyContent="space-between"
      alignItems="center"
      position="absolute"
      zIndex="1"
      width="100%"
    >
      <Heading>Logo</Heading>
      <Flex gap="12px" fontSize="lg" fontWeight="medium">
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Discover</Text>
        <Text>Login</Text>
        <Text>Register</Text>
      </Flex>
    </Flex>
  );
}

export default Navbar;
