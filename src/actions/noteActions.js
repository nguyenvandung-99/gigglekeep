import { FETCH_NOTES } from "../types";

export const fetchNotes = () => async (dispatch) => {
  const res = await fetch('/api/notes');
  const data = await res.json();
  dispatch({
    type: FETCH_NOTES,
    payload: data,
  });
}