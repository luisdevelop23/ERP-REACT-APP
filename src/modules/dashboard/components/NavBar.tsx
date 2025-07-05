import { useContext, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "../../../ui/logo/Logo";
import ButtomMode from "../../../ui/mode/ButtomMode";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/Auth/AuthContext";
type itemString = {
  name: string;
  link: string;
};
type SidebarItem = {
  id: string;
  title: string;
  icon: string;
  color: string;
  items: itemString[];
};

const NavBar = () => {
  const {LOGUOUT} = useContext(AuthContext);
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  const [selectedSection, setSelectedSection] = useState<string>("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const toggleSection = (sectionId: string) => {
    let newSet: Set<string>;

    if (collapsed) {
      // Si la misma sección está abierta, cerrarla
      if (openSections.has(sectionId)) {
        newSet = new Set(); // cerramos todo
      } else {
        newSet = new Set([sectionId]); // solo una abierta
      }
    } else {
      newSet = new Set(openSections);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
    }

    setOpenSections(newSet);
    setSelectedSection(sectionId);
  };

  const toogleSelection = (select: string) => {
    setSelectedSection(select);

    if (collapsed) {
      // Si ya está abierto, cerrarlo
      if (openSections.has(select)) {
        setOpenSections(new Set());
      } else {
        setOpenSections(new Set([select]));
      }
    } else {
      if (!openSections.has(select)) {
        const newSet = new Set(openSections);
        newSet.add(select);
        setOpenSections(newSet);
      }
    }
  };

  useEffect(() => {
    if (collapsed) {
      setOpenSections(new Set());
    }
  }, [collapsed]);

  const sections: SidebarItem[] = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: "hugeicons:dashboard-square-02",
      color: "#7e7e8f",
      items: [
        { name: "Dashboard", link: "/panel" },
      ],
    },
    {
      id: "ecommerce",
      title: "Tienda Online",
      icon: "solar:sale-outline",
      color: "#7e7e8f",
      items: [
        { name: "Publicaciones", link: "/publicaciones" },
        { name: "Nueva Publicación", link: "/nueva_publicacion" },
        { name: "Detalle Productos", link: "/detalle_productos" },
        { name: "Productos No Publicados", link: "/productos_no_publicados" },
      ],
    },
    {
      id: "products",
      title: "Productos",
      icon: "fluent-mdl2:product",
      color: "#7e7e8f",
      items: [
        { name: "Productos", link: "/productos/lista_productos" },
        { name: "Inventario", link: "/productos/inventario" },
      ],
    },
    {
      id: "users",
      title: "Usuarios",
      icon: "clarity:administrator-line",
      color: "#7e7e8f",
      items: [
        { name: "Usuarios", link: "/usuarios/lista_usuarios" },
        { name: "Inicios de Sesión", link: "/usuarios/sesiones" },
      ],
    },
    {
      id: "roles",
      title: "Roles y Permisos",
      icon: "fluent-mdl2:permissions",
      color: "#7e7e8f",
      items: [
        { name: "Roles", link: "/roles" },
        { name: "Permisos", link: "/permisos" },
        { name: "Asignar Permisos", link: "/asignacion_permisos" },
      ],
    },
    {
      id: "personal",
      title: "Personal",
      icon: "radix-icons:person",
      color: "#7e7e8f",
      items: [
        { name: "Nuevo Personal", link: "/nuevo_personal" },
        { name: "Lista Personal", link: "/lista_personal" },
      ],
    },
    {
      id: "clients",
      title: "Clientes",
      icon: "material-symbols-light:server-person-outline-sharp",
      color: "#7e7e8f",
      items: [
        { name: "Lista Clientes", link: "/lista_clientes" },
        { name: "Nuevo Cliente", link: "/nuevo_cliente" },
        { name: "Correos Enviados", link: "/nuevo_clientes_mails" },
      ],
    },
    {
      id: "emails",
      title: "Correos",
      icon: "mage:email",
      color: "#7e7e8f",
      items: [
        { name: "Nuevo Correo", link: "/nuevo_correo" },
        { name: "Lista Correos", link: "/lista_correos" },
        { name: "Plantillas", link: "/plantillas" },
        { name: "Enviar Correo", link: "/correos_enviados" },
      ],
    },
    {
      id: "requests",
      title: "Peticiones",
      icon: "bi:list-ol",
      color: "#7e7e8f",
      items: [
        { name: "Lista Peticiones", link: "/lista_peticiones" },
        { name: "Lista Respuestas", link: "/lista_respuestas" },
      ],
    },
    {
      id: "sales",
      title: "Ventas",
      icon: "hugeicons:wallet-02",
      color: "#7e7e8f",
      items: [
        { name: "Nueva Venta", link: "/nueva_venta" },
        { name: "Lista Ventas", link: "/lista_ventas" },
        { name: "Cuotas", link: "/cuotas" },
        { name: "Proformas", link: "/proformas" },
        { name: "Facturas", link: "/invoices" },
      ],
    },
  ];

  return (
    <aside
      className={`relative h-screen overflow-visible scroll-hidden bg-white border-r-2 border-gray-300 flex flex-col justify-start transition-all duration-300 ease-in-out ${
        collapsed ? "w-[60px]" : "w-[260px]"
      }`}
    >
      <div
        className="absolute top-4 right-0  bg-white border-l-2 border-y-2 border-gray-300 px-2 py-1 rounded-l-full cursor-pointer"
        onClick={() => setCollapsed(!collapsed)}
      >
        <Icon
          icon={collapsed ? "formkit:right" : "formkit:left"}
          className="text-gray-600 h-6 w-6"
        />
      </div>

      <div className="py-4 flex justify-center items-center mx-auto">
        <div className={`${collapsed ? "w-10 mt-10" : "w-32 md:w-40 h-40"}`}>
          <Logo />
        </div>
      </div>

      <div className="flex-1 space-y-2 relative overflow-y-auto">
        {sections.map((section) => {
          const isOpen = openSections.has(section.id);
          const isSelected = selectedSection === section.id;

          return (
            <div
              key={section.id}
              className={`relative p-3 rounded-lg transition-all duration-200 cursor-pointer ${
                isSelected ? "bg-[#1471d8]" : "hover:bg-gray-100"
              }`}
              onClick={() => toogleSelection(section.id)}
            >
              <label
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSection(section.id);
                }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Icon
                    className={`size-6 ${
                      isSelected ? "text-white" : "text-gray-500"
                    }`}
                    icon={section.icon}
                  />
                  {!collapsed && (
                    <h1
                      className={`font-semibold pl-2 ${
                        isSelected ? "text-white" : "text-gray-500"
                      }`}
                    >
                      {section.title}
                    </h1>
                  )}
                </div>
                {!collapsed && (
                  <Icon
                    className={`size-5 transform transition-transform ${
                      isOpen ? "rotate-180" : ""
                    } ${isSelected ? "text-white" : "text-gray-500"}`}
                    icon="iconamoon:arrow-down-2-bold"
                  />
                )}
              </label>

              {isOpen && (
                <>
                  {!collapsed ? (
                    <div className="pt-2 pl-4">
                      <ul className="text-[0.9rem] font-semibold text-left space-y-1">
                        {section.items.map((item, index) => (
                          <li>
                            <Link
                              to={`/panel${item.link}`}
                              key={index}
                              className={`cursor-pointer ${
                                isSelected
                                  ? "text-white/80 hover:text-white"
                                  : "text-gray-500/80 hover:text-black"
                              }`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="absolute left-full top-0 ml-2 bg-white shadow-lg border border-gray-300 rounded-lg p-3 z-[999] min-w-[180px]">
                      <ul className="text-sm font-medium text-gray-700 space-y-1">
                        {section.items.map((item, index) => (
                          <li
                            key={index}
                            className="hover:text-blue-600 cursor-pointer transition-colors"
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      <div>
        <div className="py-4 flex justify-center items-center">
          <button onClick={LOGUOUT} className="flex justify-center items-center gap-2 text-gray-500 hover:bg-gray-300 py-2 px-4 rounded-lg transition-all duration-300 ease-in-out group-[.open]:bg-gray-100">
            <Icon
              icon="memory:logout"
              className="size-6 group-[.open]:text-red-600 hover:text-red-600"
            />
            <h2 className="font-semibold">Cerrar Sesión</h2>
          </button>
        </div>
      </div>
      <div className="py-4 flex justify-center items-center">
        {!collapsed && (
          <div className="bg-zinc-300 rounded-4xl">
            <ButtomMode />
          </div>
        )}
      </div>
    </aside>
  );
};

export default NavBar;
