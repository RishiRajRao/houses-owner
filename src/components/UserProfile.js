import {
  // Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast,
  // Avatar,
  // AvatarBadge,
  // IconButton,
  // Center,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getUserProfileHandler } from '../services/authService';
// import { SmallCloseIcon } from "@chakra-ui/icons";

export default function UserProfile() {
  const [user, setUser] = useState({ name: '', email: '', id: '' });
  const toast = useToast();

  const getUserProfile = async () => {
    try {
      const user = await getUserProfileHandler();

      setUser(user);
    } catch (error) {
      toast({
        title: 'Error occured.',
        description: error.message,
        status: 'error',
      });
    }
  };
  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <Flex
      // minH={"100vh"}
      minW={'80vw'}
      align={'top'}
      // justify={"center"}
      // bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'xl'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          User Profile
        </Heading>
        {/* <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">Change Icon</Button>
            </Center>
          </Stack>
        </FormControl> */}
        <FormControl id="userName" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            value={user?.name}
            _placeholder={{ color: 'gray.500' }}
            type="text"
            // readOnly
            disabled
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            disabled
            value={user?.email}
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        {/* <FormControl id="mobile" isRequired>
          <FormLabel>Mobile</FormLabel>
          <Input
            disabled
            value={user?.mobile}
            placeholder="mobile"
            _placeholder={{ color: "gray.500" }}
            type="text"
          />
        </FormControl> */}
        {/* <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
          >
            Cancel
          </Button>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
          >
            Submit
          </Button>
        </Stack> */}
      </Stack>
    </Flex>
  );
}
