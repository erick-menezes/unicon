import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { theme } from "./styles/theme";

import { AuthProvider, useAuth } from "./contexts/auth";

import { PrivateRoute } from "./components/router/PrivateRoute";
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
import { RedirectRoute } from "./components/router/RedirectRoute";
import { BreakpointProvider } from "./contexts/breakpoint";

function App() {
  const { userData } = useAuth();

  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <BreakpointProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route element={<PageWithHeader />}>
                  <Route path="/home" element={<Home accessType="user" />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/:userName/posts/:postId" element={<Post />} />
                  <Route path="/groups/:groupId" element={<Group />} />
                  <Route path="/groups" element={<GroupHub />} />
                  <Route path="/categories" element={<CategoryHub />} />
                </Route>
              </Route>
              
              <Route element={<RedirectRoute />}>
                <Route path="/" element={<Landing />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </BreakpointProvider>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
