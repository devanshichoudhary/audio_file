import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./db";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export function AudioList() {
  // Query to get all audios
  const audios = useLiveQuery(() => db.audios.toArray());

  // Another simple query - total number of audios:
  const audioCount = useLiveQuery(() => db.audios.count());

  // Default values returned --> queries are still loading.
  if (!audios || audioCount === undefined) return null;

  return (
    <Box
      sx={{
        marginTop: 4,
        marginBottom: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography>
        Your have <b>{audioCount}</b> audio files.
      </Typography>
      {audios.map((audio) => (
        <div key={audio.id}>
          <Typography
            sx={{
              mt: 2,
              mb: 2,
              alignItems: "center",
            }}
          >
            {audio.id}. {audio.audio.name}
          </Typography>
          <audio controls>
            <source src={URL.createObjectURL(audio.audio)} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </Box>
  );
}
