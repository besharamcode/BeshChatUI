import axios from "axios";

export const authApi = "http://localhost:8000/chatapi/auth";

export const signup = async (values) => {
  try {
    const response = await axios.post(`${authApi}/signup`, values);
    return response;
  } catch (error) {
    return error;
  }
};
export const login = async (values) => {
  try {
    const response = await axios.post(`${authApi}/login`, values);
    return response;
  } catch (error) {
    return error;
  }
};
export const fetchUser = async (values) => {
  try {
    const response = await axios.get(`${authApi}/fetch`, values);
    return response;
  } catch (error) {
    return error;
  }
};
export const verify = async (values) => {
  try {
    const response = await axios.put(`${authApi}/verify`, values);
    return response;
  } catch (error) {
    return error;
  }
};

export const logout = async (values) => {
  try {
    const response = await axios.post(`${authApi}/logout`, values);
    return response;
  } catch (error) {
    return error;
  }
};

export const register = async (values) => {
  try {
    const response = await axios.put(`${authApi}/register`, values);
    return response;
  } catch (error) {
    return error;
  }
};

export const forgotPassword = async (values) => {
  try {
    const response = await axios.put(`${authApi}/reset`, values);
    return response;
  } catch (error) {
    return error;
  }
};
