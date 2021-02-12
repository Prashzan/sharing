import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  // USER_DETAILS_FAIL,
  // USER_DETAILS_SUCCESS,
  // USER_DETAILS_REQUEST,
  // USER_UPDATE_PROFILE_REQUEST,
  // USER_UPDATE_PROFILE_SUCCESS,
  // USER_UPDATE_PROFILE_FAIL,
} from "../constants/userConstants";
import { url } from "../api/server";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    // const { data } = await axios.post(
    //   `${server_url}/api/users/login`,
    //   { email, password },
    //   config
    // );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      //   payload:
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
};

export const register = (user) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const { data } = await axios.post(`${url}/users`, user);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
    });
  }
};
