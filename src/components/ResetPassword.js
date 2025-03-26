import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Input, Button, Heading, useToast, Card, Box } from '@chakra-ui/react';
import { resetPasswordHandler } from '../services/authService';
import NavBar from './NavBar';
const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();
  const toast = useToast();

  const handleReset = async () => {
    if (password !== confirmPassword) {
      toast({
        title: 'Passwords do not match',
        status: 'error',
        duration: 3000,
      });
      return;
    }

    const res = await resetPasswordHandler(token, password);

    if (res) {
      toast({
        title: 'Password reset successful!',
        status: 'success',
        duration: 3000,
      });
      navigate('/login');
    } else {
      toast({
        title: 'Invalid or expired token',
        status: 'error',
        duration: 3000,
      });
    }
  };

  return (
    <>
      <NavBar />
      <Box bg={{ base: 'gray.100' }} p={4} h={{ base: '100vh' }}>
        <Card p={6} maxW="400px" mx="auto">
          <Heading size="lg">Reset Password</Heading>
          <Input
            mt={4}
            placeholder="New Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            mt={4}
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button mt={4} colorScheme="blue" onClick={handleReset}>
            Reset Password
          </Button>
        </Card>
      </Box>
    </>
  );
};

export default ResetPassword;
