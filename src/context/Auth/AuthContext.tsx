import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Bounce, toast } from "react-toastify";
import {
  login as autenticación,
  logout,
  verify as verifyToken,
} from "../../services/auth/auth.service";

interface AuthContextType {
  VERIFY: () => Promise<boolean>;
  LOGIN: (username: string, password: string) => void;
  LOGUOUT: () => void;
  login: boolean;
  verify: boolean;
  loading: boolean;
}

// Crear contexto con valores iniciales undefined para forzar uso dentro del provider
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [verify, setVerify] = useState(false);
  const [loading, setLoading] = useState(false);
  const [myInformation, setMyInformation] = useState({});

  const LOGIN = async (username: string, password: string) => {
    setLoading(true);
    try {
      if (!username) {
        toast.error("Complete el campo de usuario", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return;
      }
      if (!password) {
        toast.error("Complete el campo de contraseña", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return;
      }
      const responser = await autenticación(username, password);
      if (responser?.status === 200 && responser?.data?.result) {
        toast("Acceso correcto, redirigiendo...", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setLogin(true)
        setMyInformation(responser.data.data);
        setLoading(false);
        window.location.href = "/";
      }
    } catch (error) {}
  };

  // Función para verificar autenticación, memoizada para no recrearse
  const VERIFY = useCallback(async (): Promise<boolean> => {
    setLoading(true);
    try {
      const response = await verifyToken();
      if (response.result === true && response.data) {
        setVerify(true);
        setLogin(true);
        setLoading(false);
        return true;
      } else {
        setLogin(false);
        setVerify(false);
        setLoading(false);
        window.location.href = "/login";
        return false;
      }
    } catch (error) {
      setLogin(false);
      setVerify(false);
      setLoading(false);
      return false;
    } finally {
      setLoading(false);
      return false;
    }
  }, []);

  const LOGUOUT = async () => {
    try {
      const response = await logout();
      if (response.result === true) {
        window.location.href = "/login";
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ? auto ejecucion

  useEffect(() => {
    setLoading(true);
    VERIFY();
  }, [VERIFY]);

  return (
    <AuthContext.Provider
      value={{ VERIFY, LOGIN, LOGUOUT, login, verify, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
