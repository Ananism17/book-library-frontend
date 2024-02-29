import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../components/Services/Utilities";

const initialState = {
  loggedIn: false,
};

const authLogin = (state, action) => {
  return updateObject(state, {
    loggedIn: true,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, { loggedIn: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      return authLogin(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
