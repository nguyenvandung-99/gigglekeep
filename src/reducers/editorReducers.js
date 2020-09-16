const { UPDATE_NOTE, DELETE_NOTE } = require("../types");

export const editorReducer = (state = {}, action) => {
  switch (action.type){
    case UPDATE_NOTE:
      return {
        note: action.payload
      };
    default:
      return state;
  }
};