import { Box } from "@mui/material";
export default function SidePanel() {
  return (
    <Box
      sx={{
        height: "100%",
        gridColumn: "span 2",
        display: { xs: "none", sm: "flex" },
      }}
    >
      <h1>RightPanel</h1>
    </Box>
  );
}
