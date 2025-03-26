import { useState } from 'react';
import { Input, Button, Heading, useToast, Card, Box } from '@chakra-ui/react';
import { forgotPasswordHandler } from '../services/authService';
import NavBar from './NavBar';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handleSubmit = async () => {
    const res = await forgotPasswordHandler(email);

    if (res) {
      toast({ title: 'Reset link sent!', status: 'success', duration: 3000 });
    } else {
      toast({ title: 'Error sending email', status: 'error', duration: 3000 });
    }
  };

  return (
    <>
      <NavBar />
      <Box bg={{ base: 'gray.100' }} p={4} h={{ base: '100vh' }}>
        <Card p={6} maxW="400px" mx="auto">
          <Heading size="lg">Forgot Password</Heading>
          <Input
            mt={4}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button mt={4} colorScheme="blue" onClick={handleSubmit}>
            Send Reset Link
          </Button>
        </Card>
      </Box>
    </>
  );
};

export default ForgotPassword;
