import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import AddThread from "../Widgets/AddThread";
import Post from "../../../Components/Post/Post";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFeedThreads } from "../../../states";
export default function Feed() {
  const dispatch = useDispatch();
  const feedThreads = useSelector((state) => state.feedThreads);
  const LIMIT = 10;
  const { ref, inView } = useInView(true);
  const [state, setState] = useState({
    hasNextPage: true,
    currPage: 1,
    threads: [],
  });
  const fetchThreads = async () => {
    axios
      .get(
        `http://localhost:3001/thread/getThreads?page=${state.currPage}&limit=${LIMIT}`,
      )
      .then((res) => {
        setState((state) => ({
          hasNextPage: res.data.hasNextPage,
          currPage: res.data.nextPage,
          threads: state.threads.concat(res.data.threads),
        }));
        dispatch(setFeedThreads({ threads: res.data.threads }));
      });
  };
  var i = 0;
  // This Will Run on Initial Mount
  useEffect(() => {
    console.log("i => ", i++);
    fetchThreads();
  }, []);
  //This Will Run When Last Element gets in View
  useEffect(() => {
    console.log("i => ", i++);
    if (state.hasNextPage && inView) {
      fetchThreads();
    }
  }, [inView, state.hasNextPage]);
  // console.log(feedThreads);
  return (
    <Box
      sx={{
        gridColumn: "span 6",
        p: 8,
        pt: 2,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        overflowY: "scroll",
        overflowClipMargin: "10px",
      }}
    >
      {state.threads.map((thread, i) => {
        if (i == state.threads.length - 1)
          return <Post thread={thread} key={i} ref={ref} />;
        return <Post thread={thread} key={i} />;
      })}
      <Box sx={{ height: 10, width: "100%" }}></Box>
    </Box>
  );
}
