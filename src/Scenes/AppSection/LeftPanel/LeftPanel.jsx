import {
  Box,
  List,
  Typography,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  useTheme,
  Divider,
} from "@mui/material";
import {
  HomeTwoTone,
  ChatTwoTone,
  BookmarksTwoTone,
} from "@mui/icons-material";
import { ChatBubbleOutlineOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function SidePanel() {
  const user = useSelector((state) => state.user);
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = [
    theme.palette.Maroon,
    theme.palette.Peach,
    theme.palette.Sky,
    theme.palette.Yellow,
    theme.palette.Pink,
    theme.palette.Lavender,
  ];
  return (
    <Box
      sx={{
        height: "100%",
        gridColumn: "span 2",
        display: { xs: "none", sm: "flex" },
        flexDirection: "column",
        // alignItems: "center",
      }}
    >
      {/* Section Navigation options */}
      <Box sx={{}}>
        <List>
          <ListItem sx={{}}>
            <ListItemButton
              sx={{
                borderRadius: 3,
                backgroundColor: theme.palette.background.alt,
              }}
              onClick={() => navigate("/home")}
            >
              <ListItemIcon>
                <HomeTwoTone
                  sx={{ fontSize: "1.4rem  ", color: theme.palette.Lavender }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    // color: theme.palette.Text,
                    // color: "white",
                  }}
                >
                  Home
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{}}>
            <ListItemButton
              sx={{
                borderRadius: 3,
                backgroundColor: theme.palette.background.alt,
              }}
              onClick={() => navigate(`/user/${user._id}`)}
            >
              <ListItemIcon>
                <ChatTwoTone
                  sx={{ fontSize: "1.4rem  ", color: theme.palette.Lavender }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography sx={{ fontSize: "1rem", fontWeight: 500 }}>
                  Your Threads
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{}}>
            <ListItemButton
              sx={{
                borderRadius: 3,
                backgroundColor: theme.palette.background.alt,
              }}
              onClick={() => navigate("/saved")}
            >
              <ListItemIcon>
                <BookmarksTwoTone
                  sx={{ fontSize: "1.4rem  ", color: theme.palette.Lavender }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography sx={{ fontSize: "1rem", fontWeight: 500 }}>
                  Saved
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>

        <Typography
          sx={{ textAlign: "center", fontSize: "1.3rem", fontWeight: 600 }}
        ></Typography>
      </Box>
    </Box>
  );
}
