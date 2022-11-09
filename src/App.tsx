import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { theme } from "./styles/theme";

import { AuthProvider } from "./contexts/auth";

import { PageWithHeader } from "./components/commons/PageWithHeader";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Post } from "./pages/Post";
import { Group } from "./pages/Group";
import { Settings } from "./pages/Settings";
import { GroupHub } from "./pages/GroupHub";
import { CategoryHub } from "./pages/CategoryHub";

function App() {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<PageWithHeader />}>
              <Route path="/home" element={<Home accessType="user" />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/:userName/posts/:postId" element={<Post />} />
              <Route path="/groups/:groupId" element={<Group />} />
              <Route path="/groups" element={<GroupHub />} />
              <Route path="/categories" element={<CategoryHub />} />
            </Route>

            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
