import { useDispatch } from "react-redux";
import { setLogout } from "../states";
import { Box, Button, Typography, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.alt",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
  gap: "1rem",
  flexDirection: "column",
};
export default function BasicModal(props) {
  const dispatch = useDispatch();
  const open = props.isModalOpen;
  const handleClose = () => props.setIsModalOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography sx={{ fontSize: "1.1rem" }}>
          Are You Sure You Want To Logout?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button onClick={handleClose} variant={"outlined"} color={"error"}>
            Close
          </Button>
          <Button onClick={() => dispatch(setLogout())} variant={"outlined"}>
            Yes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
