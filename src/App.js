import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import LandingPage from './components/LandingPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import ProtectedLayout from './components/ProtectedLayout';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />

          {/* Protected Routes */}
          <Route element={<ProtectedLayout />}>
            <Route path="/dashboard" element={<DashBoard />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
