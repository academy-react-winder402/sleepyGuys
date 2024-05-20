import Cookies from "js-cookie";

export const isUserAuthenticated = () => {
  const token = Cookies.get("token");

  let isAuthenticated: boolean;
  if (token) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  return isAuthenticated;
};
