import apiClient from "./api-client";

export const register = (
  user: any,
  navigate: any,
  setErrors: any,
  setIsError: any
) => {
  return apiClient
    .post("/register/", user)
    .then(() => {
      apiClient.post("/logintest/", user).then(() => {
        navigate("/journals");
      });
    })
    .catch((err) => {
      setIsError(true);
      setErrors(err.request.response);
    });
};

export const login = (
  loginDetails: any,
  navigate: any,
  setErrors: any,
  setIsError: any
) => {
  return apiClient
    .post("/logintest/", loginDetails)
    .then(() => {
      navigate("/journals");
    })
    .catch((err) => {
      setIsError(true);
      setErrors(err.request.response);
    });
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
