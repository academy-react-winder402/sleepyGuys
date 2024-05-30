import axios from "axios";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';


axios.interceptors.request.use(
  function (config) {
    // should set Authorization Header here
    config.headers["Content-Type"] = "application/json";
    config.headers.Accept = "application/json";
    config.headers.common['Authorization'] = 'Bearer ' + Cookies.get("token");;
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // switch (error?.response?.status) {
    //   case 400: {
    //     toast.error(error.response.data.Message);
    //     break;
    //   }
    //   case 401: {
    //     toast.error("شما برای این عمل، احراز هویت نشده اید");
    //     localStorage.removeItem("token");
    //     window.location.replace("/login ");
    //     break;
    //   }
    //   case 404: {
    //     toast.error("چنین سرویسی برای درخواست وجود ندارد");
    //     break;
    //   }
    //   case 500: {
    //     toast.error("خطای سرور");
    //     break;
    //   }
    //   default: {
    //     toast.error("خطای ناشناخته ای رخ داده است");
    //     break;
    //   }
    // }
    return Promise.reject(error);
  }
);

const methods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export default methods;
