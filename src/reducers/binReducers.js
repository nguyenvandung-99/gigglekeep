const { MOVETO_BIN } = require("../types");

export const binReducer = (state = {}, action) => {
  switch (action.type){
    case MOVETO_BIN:
      return {
        note: action.payload
      };
    default:
      return state;
  }
};