import * as React from "react";
//Import Component Native Base
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from "native-base";

export default function FormNativeBase() {
  return (
    <Box safeArea bg="primary.100" flex={1} p={10} mx="auto" w="100%" justifyContent="center">
      <Heading size="lg" color="primary.500">
        Welcome
      </Heading>
      <Heading size="xs" color="muted.400">
        Sign in to continue!
      </Heading>
      <VStack space={2} mt={5}>
        <FormControl>
          <FormControl.Label _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}>Email</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}>
            Password
          </FormControl.Label>
          <Input type="password" />
          <Link _text={{ color: "cyan.500", fontSize: "sm", fontWeight: 700 }} alignSelf="flex-end" mt={1}>
            Forget Password
          </Link>
        </FormControl>
        <VStack space={2} mt={5}>
          <Button colorScheme="cyan" _text={{ color: "white" }}>
            Login
          </Button>
        </VStack>
        <HStack justifyContent="center" alignItems="center">
          <IconButton
            variant="unstyled"
            startIcon={<Icon as={<MaterialCommunityIcons name="facebook" />} color="muted.700" size="sm" />}
          />
          <IconButton
            variant="unstyled"
            startIcon={<Icon as={<MaterialCommunityIcons name="google" />} color="muted.700" size="sm" />}
          />
          <IconButton
            variant="unstyled"
            startIcon={<Icon as={<MaterialCommunityIcons name="github" />} color="muted.700" size="sm" />}
          />
        </HStack>
        <HStack justifyContent="center" alignItems="center">
          <Text fontSize="sm" color="muted.700" fontWeight={400}>
            I'm a new user{" "}
          </Text>
          <Link _text={{ color: "cyan.500", bold: true, fontSize: "sm", href: "#" }}>Sign Up</Link>
        </HStack>
      </VStack>
    </Box>
  );
}
