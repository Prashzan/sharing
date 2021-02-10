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

export const register = (name, email, password, confirmPassword) => async (
  dispatch
) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    dispatch({
      type: USER_REGISTER_SUCCESS,
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
