import {
  Box,
  Avatar,
  Typography,
  Button,
  Divider,
  List,
  Toolbar,
  Drawer,
  ListItem,
  ListItemButton,
  useTheme,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import { LogoutOutlined } from "@mui/icons-material";
import { EditLocationAltOutlined } from "@mui/icons-material";
import LogOutModal from "../../Components/LogOutModal";
export default function SideBar(props) {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const colors = [
    theme.palette.Maroon,
    theme.palette.Peach,
    theme.palette.Sky,
    theme.palette.Yellow,
    theme.palette.Pink,
    theme.palette.Lavender,
  ];
  const drawerWidth = 240;
  const drawer = (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <LogOutModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Box
        sx={{
          display: "flex",
          height: "12rem",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
          backgroundColor: theme.palette.background.alt,
        }}
      >
        <LogoutOutlined
          sx={{ position: "fixed", top: 20, left: 20, fontSize: "1.5rem" }}
          onClick={() => setIsModalOpen(true)}
        />
        <Avatar
          src={`http://localhost:3001/assets/${user.picturePath}`}
          sx={{ width: "4rem", height: "4rem" }}
        />
        <Typography>
          {`${user.firstName} ${user.lastName}`.toUpperCase()}
        </Typography>
      </Box>
      <List>
        <Typography
          sx={{
            fontSize: "1rem",
            textAlign: "center",
            p: 1,
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        >
          Topics
        </Typography>
        {["General", "Coding", "Tech", "News", "How To"].map((text, i) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                mt: i == 0 ? 0 : 1,
                backgroundColor: theme.palette.Surface0,
              }}
            >
              {/* <ListItemIcon></ListItemIcon> */}
              {/* <ListItemText
                primary={text}
                sx={{ backgroundColor: colors[i], fontWeight: 500 }}
              /> */}
              <Typography
                sx={{
                  textAlign: "center",
                  color: colors[i],
                }}
              >
                {text}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        variant="temporary"
        open={props.isOpen}
        onClose={() => props.setIsOpen(!props.isOpen)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          backgroundColor: theme.palette.background.default,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
