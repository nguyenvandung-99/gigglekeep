const { UPDATE_NOTE } = require("../types");

const editorReducer = (state = {}, action) => {
  switch (action.type){
    case UPDATE_NOTE:
      return {
        note: action.payload
      };
    default:
      return state;
  }
};

export {editorReducer};