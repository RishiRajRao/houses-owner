import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <ChakraProvider>
      <LandingPage />
    </ChakraProvider>
  );
}

export default App;
