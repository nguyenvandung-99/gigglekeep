const { FETCH_NOTES, FETCH_BIN } = require("../types");

export const notesReducer = (state = {}, action) => {
  switch (action.type){
    case FETCH_NOTES:
      return {
        notes: action.payload,
        filteredNotes: action.payload,
      };
    case FETCH_BIN:
      return {
        bin: action.payload,
      };
    default:
      return state;
  }
}