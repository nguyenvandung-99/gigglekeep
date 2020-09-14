import { FETCH_NOTES, FETCH_BIN } from "../types";

export const fetchNotes = () => async (dispatch) => {
  const res = await fetch('/api/notes');
  const raw = await res.json();
  const data = raw.filter(note => !note.bin);  
  dispatch({
    type: FETCH_NOTES,
    payload: data,
  });
}

export const fetchBin = () => async (dispatch) => {
  const res = await fetch('/api/notes');
  const raw = await res.json();
  const data = raw.filter(note => note.bin);  
  dispatch({
    type: FETCH_BIN,
    payload: data,
  });
}