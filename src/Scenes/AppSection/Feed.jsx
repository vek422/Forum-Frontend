import { Box } from "@mui/material";
import AddThread from "./Widgets/AddThread";
export default function Feed() {
  return (
    <Box
      sx={{
        gridColumn: "span 6",
        border: "1px solid green",
        p: 8,
        pt: 2,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <AddThread />
    </Box>
  );
}
