import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./app/App.tsx";
import "./index.css";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppProvider from "./context/AppProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AppProvider>
            <App/>
        </AppProvider>
        <ToastContainer/>
    </StrictMode>
);
