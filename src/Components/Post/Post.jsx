import {
  Avatar,
  Box,
  Divider,
  Typography,
  useTheme,
  Button,
} from "@mui/material";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ModeCommentRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Post = forwardRef(({ thread }, ref = null) => {
  const theme = useTheme();
  const navigate = useNavigate();
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
      ref={ref}
    >
      {/* TITLE */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "space-around",
          cursor: "pointer",
        }}
        onClick={() => navigate(`/thread/${thread._id}`)}
      >
        <Typography variant="h3">{thread.title}</Typography>
        {thread.picturePath === "undefined" ? null : (
          <img
            src={`http://localhost:3001/assets/${thread.picturePath}`}
            style={{ height: "20rem", objectFit: "cover" }}
          />
        )}
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
            src={`http://localhost:3001/assets/${thread.user.picturePath}`}
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
              onClick={() => {
                navigate(`/user/${thread.user._id}`);
              }}
            >
              {thread.user.firstName} {thread.user.lastName}
            </Typography>
          </Box>
        </Box>
        <Box sx={{}}>
          <Button startIcon={<ModeCommentRounded />}>
            {thread.comments.length}
          </Button>
        </Box>
      </Box>
    </Box>
    // </Link>
  );
});
export default Post;
