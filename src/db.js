// db.js
import Dexie from "dexie";

export const db = new Dexie("myDatabase");
db.version(1).stores({
  audios: "++id, audio", // Primary key and indexed props
});
