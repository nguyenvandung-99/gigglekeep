const { UPDATE_NOTE, NEW_NOTE } = require("../types");

export const editorReducer = (state = {}, action) => {
  switch (action.type){
    case UPDATE_NOTE:
      return {
        note: action.payload
      };
    case NEW_NOTE:
      return {
        note: action.payload
      };
    default:
      return state;
  }
};