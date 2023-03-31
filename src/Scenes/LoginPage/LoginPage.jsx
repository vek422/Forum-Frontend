import { Box, Typography, IconButton, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../states";
import { DarkMode, LightMode, TextFields } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Login } from "./Login";
import Signup from "./SignUp";
export default function LoginPage() {
  const [pageType, setPageType] = useState("login");
  const isMobile = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  console.log(alt);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100dvh",
        width: "100%",
        px: 2,
        alignItems: "center",
        gap: pageType === "login" ? "5rem" : "0rem",
        // justifyContent: "space-between",
      }}
    >
      <Box
        component={"header"}
        sx={{
          py: 3,
          px: 3,
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography
          fontWeight={700}
          fontSize={"2rem"}
          color={theme.palette.primary.main}
        >
          Forum
        </Typography>
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkMode sx={{ fontSize: "25px" }} />
          ) : (
            <LightMode sx={{ fontSize: "25px" }} />
          )}
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          flexDirection: "column",
          width: isMobile ? "90%" : pageType === "signup" ? "50%" : "40%",
        }}
      >
        {pageType === "login" ? (
          <Login setPageType={setPageType} />
        ) : (
          <Signup setPageType={setPageType} />
        )}
      </Box>
    </Box>
  );
}
