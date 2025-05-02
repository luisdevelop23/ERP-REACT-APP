import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "./style.css";

const ButtomMode = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const isDarkMode = storedTheme === "dark" || (!storedTheme && prefersDark);

        setIsDark(isDarkMode);
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, []);

    const toggleTheme = () => {
        const newMode = !isDark;
        setIsDark(newMode);
        document.documentElement.classList.toggle("dark", newMode);
        localStorage.setItem("theme", newMode ? "dark" : "light");
    };

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.error("Error al entrar en pantalla completa:", err);
            });
        } else {
            document.exitFullscreen();
        }
    };

    return (
        <div className="flex items-center gap-4 px-4 py-2">
            {/* Toggle de modo oscuro */}
            <label htmlFor="theme" className="theme cursor-pointer">
                <span className="theme__toggle-wrap ">
                    <input
                        id="theme"
                        className="theme__toggle"
                        type="checkbox"
                        role="switch"
                        name="theme"
                        value="dark"
                        checked={isDark}
                        onChange={toggleTheme}
                    />
                    <span className=""></span>
                    <span className="theme__icon">
                        {[...Array(9)].map((_, i) => (
                            <span key={i} className="theme__icon-part"></span>
                        ))}
                    </span>
                </span>
            </label>

            {/* Botón de pantalla completa */}
            <button
                onClick={toggleFullScreen}
                className="text-[#7e7e8f] cursor-pointer hover:text-black transition-colors border-2 rounded-md"
                title="Pantalla completa"
            >
                <Icon icon="mingcute:fullscreen-2-line" className="size-6" />
            </button>
        </div>
    );
};

export default ButtomMode;
