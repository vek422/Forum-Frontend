import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import LoginPage from "./Scenes/LoginPage/LoginPage";
import Home from "./Scenes/Home/Home";
import { useEffect } from "react";
import axios from "axios";
import { refreshUser } from "./states/index.js";
import Navbar from "./Scenes/Navbar/Navbar";
import Thread from "./Scenes/Thread/Thread";
import Profile from "./Scenes/ProfilePage/Profile";
import SavedThread from "./Scenes/SavedThreads/SavedThreads";

function App() {
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const state = useSelector((state) => state);
  useEffect(() => {
    if (state.user) {
      axios
        .get(
          `http://localhost:3001/auth/refreshUser?userId=${state.user._id}`,
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          },
        )
        .then((res) => dispatch(refreshUser({ user: res.data.user })));
    }
  }, []);
  return (
    <div className="app" style={{ overflow: state.user ? "auto" : "auto" }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {state.user && <Navbar />}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/thread/:id" element={<Thread />} />
            <Route path="/user/:id" element={<Profile />} />
            <Route path="/saved" element={<SavedThread />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
