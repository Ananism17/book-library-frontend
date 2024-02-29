import axios from "axios";
import * as actionTypes from "./actionTypes";
import Router from "next/router";
import { BASE_URL } from "../../base";

//react-toast
import { toast } from "react-toastify";

export const authLogin = () => {
  Router.push({
    pathname: "/",
  });
  return {
    type: actionTypes.AUTH_LOGIN,
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    const apiUrl = BASE_URL + "api/users/auth";

    const apiData = {
      email,
      password,
    };
    axios
      .post(apiUrl, apiData)
      .then((response) => {
        if (response.data.status) {
          dispatch(authLogin());
        } else {
          toast.error(response.data.message, {
            position: "top-right",
            theme: "colored",
          });
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          theme: "colored",
        });
        console.log(err);
      });
  };
};
