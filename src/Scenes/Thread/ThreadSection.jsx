import {
  Avatar,
  Box,
  Typography,
  useTheme,
  Divider,
  Button,
  Icon,
  IconButton,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Comment from "./CommentCard";
import { TreeView } from "@mui/lab";
import {
  BookmarkAddTwoTone,
  BookmarkAddedTwoTone,
  ModeCommentTwoTone,
} from "@mui/icons-material";
import AddComment from "./AddComment";
import { useSelector } from "react-redux";
const replaceBr = (text) => {
  return text.replace(/\n/g, "<br />");
};
export default function ThreadSection() {
  const user = useSelector((state) => state.user);
  const theme = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();
  const [thread, setThread] = useState(null);
  const [comments, setComments] = useState(null);
  const [observer, setObserver] = useState(1);
  const [saved, setSaved] = useState(user.saved.includes(id));
  useEffect(() => {
    axios.get(`http://localhost:3001/thread/getThread/${id}`).then((res) => {
      setThread(res.data);
      setComments(res.data.comments);
    });
  }, [observer]);
  const renderTree = (nodes) => {
    <Comment key={nodes._id} nodeId={nodes._id} label={nodes.user}>
      {nodes.child ? nodes.map((node) => renderTree(node)) : null}
    </Comment>;
  };
  const handleSaveThread = () => {
    if (!saved) {
      const saveThreaad = axios
        .post(`http://localhost:3001/thread/saveThread`, {
          threadId: id,
          userId: user._id,
        })
        .then((res) => res.status);
      setSaved(true);
    }
  };
  if (!thread) return null;
  return (
    <Box
      sx={{
        gridColumn: "span 6",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        p: 2,
        overflowClipMargin: "10px",
        overflowY: "scroll",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h1">{thread.title}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            src={`http://localhost:3001/assets/${thread.user.picturePath}`}
          />
          <Box>
            <Typography sx={{ color: theme.palette.neutral.main }}>
              Posted By
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                "& hover": { color: "red" },
              }}
              onClick={() => {
                navigate(`/user/${thread.user._id}`);
              }}
            >
              {thread.user.firstName} {thread.user.lastName}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Typography
          dangerouslySetInnerHTML={{ __html: replaceBr(thread.body) }}
        />
        <Divider />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <IconButton>
              <ModeCommentTwoTone />
            </IconButton>
            <Typography> {thread.comments.length} Comments</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <IconButton onClick={handleSaveThread}>
              {saved ? <BookmarkAddedTwoTone /> : <BookmarkAddTwoTone />}
            </IconButton>
            <Typography>{saved ? "Saved" : "Save"}</Typography>
          </Box>
        </Box>
        <AddComment threadId={thread._id} setObserver={setObserver} />
      </Box>

      <TreeView>
        {comments
          ? comments.map((comment) => (
              <Comment label={comment} nodeId={comment._id} key={comment._id}>
                {comment.child.length > 0
                  ? comment.child.map((_comment) => (
                      <Comment
                        label={_comment}
                        nodeId={_comment._id}
                        key={_comment._id}
                      />
                    ))
                  : null}
                <AddComment
                  threadId={thread._id}
                  parentId={comment._id}
                  setObserver={setObserver}
                />
              </Comment>
            ))
          : null}
      </TreeView>
    </Box>
  );
}
