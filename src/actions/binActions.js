import { MOVETO_BIN } from "../types"
import { LogTime } from "../LogTime";

export const moveToBin = (note) => (dispatch) => {
  note.bin = !note.bin;
  if (note.bin) {
    note.time = LogTime();
  }
  fetch("/api/notes/" + note._id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  }).then((res) => res.json())
  .then((data) => {
    dispatch({ type: MOVETO_BIN, payload: data });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};