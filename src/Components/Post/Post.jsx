import {
  Avatar,
  Box,
  Divider,
  Typography,
  useTheme,
  Button,
} from "@mui/material";
import { forwardRef } from "react";
import { useSelector } from "react-redux";
import { ModeCommentRounded } from "@mui/icons-material";
const Post = forwardRef(({ thread }, ref) => {
  const theme = useTheme();
  const user = useSelector((state) => state.user);
  return (
    <Box
      sx={{
        borderRadius: 3,
        backgroundColor: theme.palette.background.alt,
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        boxShadow: "-3px 10px 66px -58px rgba(0, 0, 0, 0.75)",
      }}
      ref={ref ? ref : null}
    >
      {/* TITLE */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h3">{thread.title}</Typography>
        <Typography>{thread.body}</Typography>
      </Box>

      <Divider />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            src={`http://localhost:3001/assets/${thread.userPicturePath}`}
          />
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={{ color: theme.palette.neutral.main }}>
              Posted by
            </Typography>
            <Typography
              sx={{
                color: theme.palette.secondary.main,
                "&hover": {},
                cursor: "pointer",
              }}
            >
              {thread.firstName} {thread.lastName}
            </Typography>
          </Box>
        </Box>
        <Box sx={{}}>
          <Button startIcon={<ModeCommentRounded />}>50+</Button>
        </Box>
      </Box>
    </Box>
  );
});
export default Post;
