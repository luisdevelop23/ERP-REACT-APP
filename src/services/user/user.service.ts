import Api from "../../api/AxiosConfig.ts";

const fetchUser = async (IdUser: string) => {
  try {
    const responde = await Api.get(`/api/user/${IdUser}`);
    if(responde.status === 200 || responde.status === 204){
      return responde.data;
    }
  } catch (error) {}
};

const getUsers = async (page: number, amount: number, search?: string) => {
  try {
    const responde = await Api.get(
      `api/user/?page=${page}&amount=${amount}`
    );
    if(responde.status === 200 || responde.status === 204){
      return responde.data;
    }
  } catch (error) {
    throw error;
  }
};

const createUser = async () => {
  try {
  } catch (error) {}
};

const updateUser = async () => {
  try {
  } catch (error) {}
};

const updatePassword = async () => {
  try {
  } catch (error) {}
};

const deleteUser = async () => {
  try {
  } catch (error) {}
};

export {
  fetchUser,
  getUsers,
  createUser,
  updateUser,
  updatePassword,
  deleteUser,
};
