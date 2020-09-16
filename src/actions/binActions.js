import { MOVETO_BIN, DELETE_NOTE } from "../types"
import { LogTime } from "../LogTime";

export const moveToBin = (note) => (dispatch) => {
  note.bin = !note.bin;
  note.bin && (note.time = LogTime());
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

export const deleteNote = (note) => (dispatch) => {
  fetch("/api/notes/" + note._id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  }).then((res) => res.json())
  .then((data) => {
    dispatch({ type: DELETE_NOTE, payload: data });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};