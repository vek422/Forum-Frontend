import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
// import { CssBaseline, ThemeProvider } from "@mui/";
import { CssBaseline, ThemeProvider } from "@mui/material";
// import { createTheme } from "@mui/mat/styles";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import LoginPage from "./Scenes/LoginPage/LoginPage";
import Home from "./Scenes/Home/Home";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = useSelector((state) => state.user) != null ? true : false;
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={isAuth ? <Home /> : <LoginPage />} />
            <Route path="/home" element={isAuth ? <Home /> : <LoginPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
