import Api from "../../api/AxiosConfig.ts";
import { getAccessToken } from "../../plugins/js-cookie/js-cookie.plugin.ts";
import { Bounce, toast } from "react-toastify";

const login = async (username: string, password: string) => {
  try {
    const responde = await Api.post("/api/auth/login", {
      username,
      password,
    });
    if(responde.status === 200){
      return responde;
    }
    
  } catch (error: any) {
    toast.error(error.response.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    })
    // console.log("login error", error);
    throw error;
  }
};

const refresh = async () => {
  try {
    const responde = await Api.post("/api/auth/refresh", {
      token: getAccessToken(),
    });
    if (responde.status === 200) {
      return responde.data;
    }
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    const responde = await Api.post("/api/auth/logout");
    if (responde.status === 200) {
      return responde.data;
    }
  } catch (error) {
    throw error;
  }
};

const verify = async () => {
  try {
    const response = await Api.get("/api/auth/verify");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

export { login, logout, refresh, verify };
