import { Box } from "@mui/material";
import LeftPanel from "../AppSection/LeftPanel/LeftPanel";
import ThreadSection from "./ThreadSection";
export default function Thread() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(10,minmax(0,1fr))",
      }}
    >
      <LeftPanel />
      <ThreadSection />
      {/* <RightPanel /> */}
    </Box>
  );
}
