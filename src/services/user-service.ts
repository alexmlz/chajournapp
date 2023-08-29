import apiClient from "./api-client";
/* import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/newApi/test",

}); */

//const tokenKey = "token";

export const register = (user: any, navigate: any) => {
  return apiClient.post("/register/", user).then(() => {
    apiClient.post("/logintest/", user).then(() => {
      navigate("/journals");
    });
  });
};

export const login = (loginDetails: any, navigate: any) => {
  return apiClient.post("/logintest/", loginDetails).then(() => {
    navigate("/journals");
  });
  //localStorage.setItem(tokenKey, response.data.token);
  //localStorage.setItem("user", JSON.stringify(response.data));
};

export const logout = (navigate: any) => {
  return apiClient.post("/logout/").then(() => {
    navigate("/logout");
  });
};

export const getUser = (navigate: any) => {
  return apiClient
    .get("/user/")
    .then(() => {
      navigate("/journals");
    })
    .catch(() => {
      navigate("/");
    });
};
