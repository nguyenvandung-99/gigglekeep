import { UPDATE_NOTE, NEW_NOTE } from "../types"

export const updateNote = (note) => (dispatch) => { !note.new ?
  (
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
  })) : (
    fetch("/api/notes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    }).then((res) => res.json())
    .then((data) => {
      dispatch({ type: NEW_NOTE, payload: data });
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  );
};