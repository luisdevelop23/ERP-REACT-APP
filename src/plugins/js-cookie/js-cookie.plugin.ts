import Cookies from "js-cookie";

//todo Función para obtener el token de las cookies
export const getAccessToken = () => {
  return Cookies.get("access_token"); //? Aquí 'access_token' es el nombre de la cookie
};

//todo Función para verificar si el token está presente
export const isAuthenticated = () => {
  const token = getAccessToken();
  return token ? true : false; //? Si hay un token, el usuario está autenticado
};
