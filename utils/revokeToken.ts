import Cookies from "js-cookie";

export const revokeToken = () => {
  const token = Cookies.get("token");

  switch (Boolean(token)) {
    case true: {
      return Cookies.remove("token");
    }
    case false: {
      return Cookies.remove("token");
    }
    default: {
      break;
    }
  }
};
