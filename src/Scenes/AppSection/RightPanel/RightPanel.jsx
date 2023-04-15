import { Box } from "@mui/material";
import AddThread from "../Widgets/AddThread";
import ProfileWidget from "../../../Components/Post/ProfileWidget";
export default function SidePanel() {
  return (
    <Box
      sx={{
        gridColumn: "span 2",
        display: { xs: "none", sm: "flex" },
        flexDirection: "column",
        alignItems: "center",
        py: 2,
        gap: 4,
      }}
    >
      <AddThread />
      <ProfileWidget />
    </Box>
  );
}
