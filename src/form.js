import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { db } from "./db";

const theme = createTheme();

export default function Form() {
  const [files, setFiles] = React.useState();
  const selectFile = (event) => {
    console.log(event.target.files);
    setFiles(event.target.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (files === undefined || files?.length === 0) {
      return;
    }
    await db.audios.add({
      audio: files[0],
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AudioFileIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Upload and play audio files
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Stack direction="row">
              <Button variant="text" component="label">
                Select File
                <input onChange={selectFile} type="file" accept=".mp3" hidden />
              </Button>
              <Typography sx={{ pt: 0.5, pl: 2 }}>
                {" "}
                {files?.length > 0 ? `Selected: ${files[0].name}` : ""}
              </Typography>
            </Stack>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Upload
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
