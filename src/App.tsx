import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { theme } from "./styles/theme";

import { Landing } from "./pages/Landing";
import { Register } from "./pages/Register";

function App() {
  return (
    <ChakraProvider theme={theme}>      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
