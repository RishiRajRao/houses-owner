// "use client";

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  // Heading,
  Text,
  Link,
  useColorModeValue,
  Box,
  InputGroup,
  InputRightElement,
  Stack,
  useToast,
} from '@chakra-ui/react';

import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { loginHandler } from '../services/authService';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ handleSignup }) {
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const toast = useToast();
  const { setAuthToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const data = await loginHandler({ email, password });
    if (data) {
      setAuthToken(data.token);
      toast({
        title: 'Login successful',
        description: "You're now logged in.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      navigate('/dashboard');
    }
  };
  return (
    <Flex
      // minH={"100vh"}
      // minW={"90"}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={1} mx={'auto'} maxW={'lg'} px={6}>
        <Stack align={'center'}>
          {/* <Heading fontSize={"xl"}>Login</Heading> */}
          {/* <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Text color={"blue.400"}>features</Text> ✌️
          </Text> */}
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                {/* <Checkbox>Remember me</Checkbox> */}
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleLogin}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                New User?{' '}
                <Link color={'blue.400'} onClick={handleSignup}>
                  Register
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
