import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Bounce, toast } from "react-toastify";
import { login as autenticación, verify as verifyToken } from "../../services/auth/auth.service";

interface AuthContextType {
  VERIFY: () => Promise<boolean>;
  LOGIN: (username: string, password: string) => void;
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
      console.log(responser);
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
        window.location.href = "/dashboard";
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
        return true;
      } else {
        setLogin(false);
        setVerify(false);
        window.location.href = "/login";
        return false;
      }
    } catch (error) {
      setLogin(false);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    VERIFY();
  }, [VERIFY]);

  return (
    <AuthContext.Provider value={{ VERIFY, LOGIN, login, verify, loading }}>
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
