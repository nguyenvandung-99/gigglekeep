import { UPDATE_NOTE } from "../types"

export const updateNote = (note) => (dispatch) => {
  console.log(JSON.stringify(note))
  fetch("/api/notes/" + note._id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  }).then((res) => res.json())
  .then((data) => {
    dispatch({ type: UPDATE_NOTE, payload: data });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};