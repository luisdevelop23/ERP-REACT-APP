import { createContext, ReactNode } from "react";




interface UserContextType{
    loading: boolean
}

// ? Crear el Contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// ? Definir el UserProvider
interface UserProviderProps{
    children: ReactNode
};


export const UserProvider: React.FC<UserProviderProps> = ({children}) => {
    return (
        <UserContext.Provider value={{
            loading: false
        }}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContext