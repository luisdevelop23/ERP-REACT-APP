import { createContext, ReactNode, useState } from "react";
import { UserIF } from "../../interface/user.interface";
import {
  fetchUser,
  getUsers,
  updatePassword,
  deleteUser,
} from "../../services/user/user.service";
import { Bounce, toast } from "react-toastify";

interface UserContextType {
  loading: boolean;
  UsersList: UserIF[];
  GETUSERS: () => void;
}

// ? Crear el Contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// ? Definir el UserProvider
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [pages, setPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [amountUsers, setAmountUsers] = useState<number>(12);
  const [UsersList, setUsersList] = useState<UserIF[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const GETUSERS = async () => {
    try {
      setLoading(true);
      const response = await getUsers(currentPage,amountUsers);
      if(response.result === false){
        return
      }
      console.log(response);
      setUsersList(response.data);
      if (response.pages !== pages && response.pages !== 0) {
        setPages(response.pages);
      }
    } catch (error) {
      console.error("Error fetching Users:", error);
    } finally {
      setLoading(false);
    }
  };

  const FETMIINFO = async () => {
    try {
      setLoading(true);
      const response = await getUsers(currentPage,amountUsers);
      if(response.result === false){
        return
      }
      console.log(response);
      setUsersList(response.data);
      if (response.pages !== pages && response.pages !== 0) {
        setPages(response.pages);
      }
    } catch (error) {
      console.error("Error fetching Users:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <UserContext.Provider
      value={{
        loading,
        UsersList,
        GETUSERS,

      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
