import {
  Typography,
  Box,
  useTheme,
  TextField,
  Dialog,
  DialogTitle,
} from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { useState } from "react";
export default function AddThread() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        // border: "2px solid red",
        backgroundColor: theme.palette.background.alt,
        p: 1.5,
        px: 1.5,
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* <Typography>Add a New Thread</Typography>
      <AddOutlined
        sx={{
          backgroundColor: theme.palette.primary.main,
          //   p: "2px",
          fontSize: "1.5rem",
          color: "black",
          borderRadius: 1,
        }}
      /> */}
      <TextField
        placeholder="Add Thread"
        sx={{ width: "100%" }}
        // onFocus={() => console.log("hello")}
        onClick={handleClickOpen}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"50rem"}
        sx={{
          //   backgroundColor: "rgba(255 255 255 / 0)",
          "& > div>div": {
            backgroundColor: "rgba(255 255 255 / 0)",
            borderRadius: 5,
          },
        }}

        // sx={{ backgroundColor: "red" }}
      >
        <Box
          sx={{
            width: "50rem",
            height: "30rem",
            p: 5,
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(255 255 255 / 0.4)",
            borderRadius: 5,
          }}
        >
          <Typography> </Typography>
        </Box>
      </Dialog>
    </Box>
  );
}
