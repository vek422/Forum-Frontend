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
export default function SidePanel() {
  const theme = useTheme();
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
            >
              <ListItemIcon>
                <HomeTwoTone
                  sx={{ fontSize: "1.4rem  ", color: theme.palette.Rosewater }}
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
            >
              <ListItemIcon>
                <ChatTwoTone
                  sx={{ fontSize: "1.4rem  ", color: theme.palette.Rosewater }}
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
            >
              <ListItemIcon>
                <BookmarksTwoTone
                  sx={{ fontSize: "1.4rem  ", color: theme.palette.Rosewater }}
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
        >
          Groups
        </Typography>
      </Box>
    </Box>
  );
}
