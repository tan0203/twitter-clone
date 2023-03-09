import axios from "axios";
import { ILogin } from "interfaces";

// gọi axios tới API

const url = process.env.REACT_APP_BACKEND_URL;
const factories = {
  requestLogin: (data: ILogin) => {
    return axios({
      method: "post",
      url: `${url}auth/login`,
      data: data,
    });
  },
};
export default factories;
