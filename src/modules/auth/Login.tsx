import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import logo from "../../assets/erp-logo-v3.webp";
import erpimg from "../../assets/ERP_IMG2.png";
import { useAuthContext } from "../../context/Auth/useAuthContext";
import { login } from "../../services/auth/auth.service";
const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [view, setView] = useState<boolean>(false);
  const { VERIFY,LOGIN } = useAuthContext();

  const handleLogin = async () => {
    await LOGIN(username, password);
  };
  return (
    <main>
      <div className="flex w-full  bg-gray-100 h-screen">
        <div className="w-7/12 h-full bg-blue-500 flex justify-center items-center">
          <img src={erpimg} className="w-[650px] rounded-3xl" alt="" />
        </div>
        <div className="w-5/12 h-full flex flex-col  items-center justify-center">
        <img src={logo} className="w-[200px]" alt="" />
          <h1 className="text-4xl text-center py-8 font-bold text-blue-500">
            METEOR-<span className="text-yellow-500">ERP</span>{" "}
          </h1>
          <div className="bg-white rounded-3xl border-2 border-gray-300 w-[400px] py-10 px-5 shadow-md">
            <h2 className="text-4xl text-center py-2 font-bold">Login</h2>
            <div className="h-full flex flex-col justify-center space-y-5">
              <label className="text-lg font-semibold">Username</label>
              <input
                type="text"
                className="border-2 border-gray-300 rounded-md w-full p-2 outline-none focus:border-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="text-lg font-semibold">Password</label>
              <div className="relative">
                <input
                  type={view ? "text" : "password"}
                  className="border-2 border-gray-300 rounded-md w-full p-2 outline-none focus:border-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  onClick={() => setView(!view)}
                  className="absolute text-2xl top-3 right-4 text-gray-600"
                >
                  {view ? <Icon icon="ion:eye-off" /> : <Icon icon="ion:eye" />}
                </button>
              </div>

              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
