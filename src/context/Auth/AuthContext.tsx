import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { UserIF } from "../../interface/user.interface";
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
  myInformation: UserIF | any;
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
  const [myInformation, setMyInformation] = useState<UserIF | any>({});


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
        setLogin(true);
        setMyInformation(responser.data.data);
        setLoading(false);
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
        setLogin(false);
        setVerify(false);
        setMyInformation({});
        toast.success("Sesión cerrada correctamente", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Error en LOGOUT:", error);
      toast.error("Error al cerrar sesión", {
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
    } finally {
      setLoading(false);
    }
  };

  //? Verificación automática al cargar la aplicación
  useEffect(() => {
    setLoading(true);
    VERIFY();
  }, [VERIFY]);

  return (
    <AuthContext.Provider
      value={{ VERIFY, LOGIN, LOGUOUT, login, verify, loading, myInformation }}
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
