import * as React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "../componants/AppBar";
import Login from "./Login";
import ToDo from "./todo";
import { State } from "../redux/reducers";

const theme = createTheme();

const DefaultNavigation = ({ user }: any) =>
  user ? <Navigate to="/to-do" /> : <Navigate to="/login" />;

const RestrictedRoute = ({ user, Component }: any) =>
  user ? <Component /> : <Navigate to="/login" />;

function App() {
  const user = useSelector((state: State) => state.user);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route
            path="/to-do"
            element={<RestrictedRoute user={user} Component={ToDo} />}
          />
          <Route path={`/login`} element={<Login />} />
          <Route path="/*" element={<DefaultNavigation user={user} />} />
          <Route path="/*" element={<DefaultNavigation user={user} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
