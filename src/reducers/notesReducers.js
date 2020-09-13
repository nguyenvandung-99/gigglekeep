const { FETCH_NOTES } = require("../types");

export const notesReducer = (state = {}, action) => {
  switch (action.type){
    case FETCH_NOTES:
      return {
        notes: action.payload,
        filteredNotes: action.payload,
      };
      default:
      return state;
  }
}