import { useSelector } from "react-redux";
import {
  Typography,
  Box,
  Dialog,
  TextField,
  useTheme,
  Button,
  useMediaQuery,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { EditOutlined } from "@mui/icons-material";
import { Formik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import { useState } from "react";
export default function AddThreadModel({ open, setOpen }) {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClose = () => {
    setOpen(false);
  };
  const post = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);
    formData.append("userId", user._id);
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("userPicturePath", user.picturePath);
    console.log(formData);
    const createThreadResponse = await fetch(
      "http://localhost:3001/thread/postThread",
      {
        method: "POST",
        body: formData,
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    console.log(createThreadResponse);
    onSubmitProps.resetForm();
    setOpen(false);
  };
  const handleFormSubmit = async (values, onSubmitProps) => {
    await post(values, onSubmitProps);
  };
  const initialValueThread = {
    title: "",
    body: "",
    picture: "",
  };
  const validationSchema = yup.object().shape({
    title: yup.string().required("required"),
    body: yup.string(),
  });
  return (
    <>
      <Dialog
        open={open}
        onClose={() => setIsConfirmOpen(true)}
        maxWidth={"50rem"}
        fullScreen={fullScreen}
        sx={{
          backdropFilter: "blur(5px)",

          backgroundColor: "rgba(255 255 255 / 0)",

          "& > div": {
            backgroundColor: "rgba(255 255 255 / 0)",
          },
          "& > div>div": {
            backgroundColor: "rgba(255 255 255 / 0)",
            borderRadius: 5,
          },
        }}
      >
        <Formik
          initialValues={initialValueThread}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            resetForm,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  width: "50rem",
                  p: 2,
                  backdropFilter: "blur(5px)",
                  backgroundColor: "rgba(255 255 255 / 0  )",
                  borderRadius: 5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: theme.palette.background.alt,
                      p: 2,
                      borderRadius: 5,
                    }}
                  >
                    <TextField
                      name="title"
                      value={values.title}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={Boolean(touched.title) && Boolean(errors.title)}
                      helperText={touched.title && errors.title}
                      sx={{
                        width: "100%",
                        borderRadius: 5,
                        fontWeight: 700,
                        fontSize: "3rem",
                      }}
                      label="Title of the thread"
                    />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.background.alt,
                      p: 2,
                      borderRadius: 5,
                    }}
                  >
                    <TextField
                      name="body"
                      value={values.body}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={Boolean(touched.body) && Boolean(errors.body)}
                      helperText={touched.body && errors.body}
                      sx={{ width: "100%" }}
                      label="Body Of the thread"
                      multiline
                      rows={6}
                    />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.background.alt,
                      p: 2,
                      borderRadius: 5,
                    }}
                  >
                    <Dropzone
                      acceptedFiles=".jpg,.jpeg,.png"
                      multiple={false}
                      onDrop={(acceptedFiles) =>
                        setFieldValue("picture", acceptedFiles[0])
                      }
                    >
                      {({ getRootProps, getInputProps }) => (
                        <Box
                          {...getRootProps()}
                          border={`2px dashed ${theme.palette.primary.main}`}
                          sx={{
                            "& hover": { cursor: "pointer" },
                            px: "2rem",
                          }}
                        >
                          <input {...getInputProps()} />
                          {!values.picture ? (
                            <p>Add Picture Here</p>
                          ) : (
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <Typography>{values.picture.name}</Typography>
                              <EditOutlined />
                            </Box>
                          )}
                        </Box>
                      )}
                    </Dropzone>
                  </Box>
                  <DialogActions>
                    <Button
                      type="submit"
                      variant="outlined"
                      sx={{
                        backgroundColor: theme.palette.secondary,
                      }}
                    >
                      Submit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => {
                        setIsConfirmOpen(true);
                        // setOpen(false);
                      }}
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Box>
              </Box>
            </form>
          )}
        </Formik>
      </Dialog>
      <ConfirmationDialog
        isConfirmOpen={isConfirmOpen}
        handleClose={() => setIsConfirmOpen(false)}
        setOpen={setOpen}
      />
    </>
  );
}

const ConfirmationDialog = ({ isConfirmOpen, handleClose, setOpen }) => (
  <Dialog open={isConfirmOpen} onClose={handleClose}>
    <DialogTitle>Are You Sure You Want To Cancel ? </DialogTitle>
    <DialogActions>
      <Button
        onClick={() => {
          handleClose();
          setOpen(false);
        }}
      >
        Yes
      </Button>
      <Button
        onClick={() => {
          handleClose();
          setOpen(true);
        }}
      >
        No
      </Button>
    </DialogActions>
  </Dialog>
);
