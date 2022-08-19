import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { theme } from "./styles/theme";

import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <ChakraProvider theme={theme}>      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
