import { Box } from "@mui/material";
import Post from "../../Components/Post/Post";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LeftPanel from "../AppSection/LeftPanel/LeftPanel";

export default function SavedThread() {
  const user = useSelector((state) => state.user);
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    console.log(user._id);
    axios
      .get(`http://localhost:3001/getsavedThread/${user._id}`)
      .then((res) => setThreads(res.data.saved));
  }, []);
  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(10,minmax(0,1fr))" }}
    >
      <LeftPanel />
      <Box
        sx={{
          gridColumn: "span 8",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {threads &&
          threads.map((thread) => <Post thread={thread} key={thread._id} />)}
      </Box>
    </Box>
  );
}
