import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import TopProfile from "./components/TopProfile";
import DashboardPage from "./views/dashboard/DashboardPage";
import ProductsRoutes from "./views/products/ProductsRoutes";

const Dashboard = () => {
  return (
    <div className="flex w-full  bg-gray-300">
      <div className="flex h-screen w-full overflow-hidden">
        <NavBar />
        <div className="flex flex-col flex-1 h-full relative z-0">
          <TopProfile />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            {/* <Route path="/ecommers/*" element={<ProductsRoutes />} /> */}
            <Route path="/product/*" element={<ProductsRoutes />} />
            <Route path="/users/*" element={<ProductsRoutes />} />
            <Route path="/rolesandpermissions/*" element={<ProductsRoutes />} />
            <Route path="/personal/*" element={<ProductsRoutes />} />
            <Route path="/clients/*" element={<ProductsRoutes />} />
            <Route path="/emails/*" element={<ProductsRoutes />} />
            <Route path="/requests/*" element={<ProductsRoutes />} />
            <Route path="/sales/*" element={<ProductsRoutes />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

/*
const sections: SidebarItem[] = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: "hugeicons:dashboard-square-02",
      color: "#7e7e8f",
      items: [
        { name: "Dashboard", link: "/dashboard" },
        { name: "Dashboard 2", link: "/dashboard2" },
        { name: "Dashboard 3", link: "/dashboard3" },
      ],
    },
    {
      id: "ecommerce",
      title: "Tienda Online",
      icon: "solar:sale-outline",
      color: "#7e7e8f",
      items: [
        { name: "Publicaciones", link: "/allPosts" },
        { name: "Nueva Publicación", link: "/newPost" },
        { name: "Detalle Productos", link: "/detailProducts" },
        { name: "Productos No Publicados", link: "/unpublishedProducts" },
      ],
    },
    {
      id: "products",
      title: "Productos",
      icon: "fluent-mdl2:product",
      color: "#7e7e8f",
      items: [
        { name: "Nuevo Producto", link: "/newProduct" },
        { name: "Lista Productos", link: "/listProducts" },
        { name: "Stock Productos", link: "/stockProducts" },
        { name: "Inventario", link: "/inventory" },
      ],
    },
    {
      id: "users",
      title: "Usuarios",
      icon: "clarity:administrator-line",
      color: "#7e7e8f",
      items: [
        { name: "Nuevo Usuario", link: "/newUser" },
        { name: "Lista Usuarios", link: "/listUsers" },
        { name: "Inicios de Sesión", link: "/logins" },
      ],
    },
    {
      id: "roles",
      title: "Roles y Permisos",
      icon: "fluent-mdl2:permissions",
      color: "#7e7e8f",
      items: [
        { name: "Roles", link: "/roles" },
        { name: "Permisos", link: "/permissions" },
        { name: "Asignar Permisos", link: "/assignPermissions" },
      ],
    },
    {
      id: "personal",
      title: "Personal",
      icon: "radix-icons:person",
      color: "#7e7e8f",
      items: [
        { name: "Nuevo Personal", link: "/newPersonal" },
        { name: "Lista Personal", link: "/listPersonal" },
      ],
    },
    {
      id: "clients",
      title: "Clientes",
      icon: "material-symbols-light:server-person-outline-sharp",
      color: "#7e7e8f",
      items: [
        { name: "Lista Clientes", link: "/listClients" },
        { name: "Nuevo Cliente", link: "/newClient" },
        { name: "Correos Enviados", link: "/newClientMails" },
      ],
    },
    {
      id: "emails",
      title: "Correos",
      icon: "mage:email",
      color: "#7e7e8f",
      items: [
        { name: "Nuevo Correo", link: "/newEmail" },
        { name: "Lista Correos", link: "/listEmails" },
        { name: "Plantillas", link: "/templates" },
        { name: "Enviar Correo", link: "/sendEmail" },
      ],
    },
    {
      id: "requests",
      title: "Peticiones",
      icon: "bi:list-ol",
      color: "#7e7e8f",
      items: [
        { name: "Lista Peticiones", link: "/listRequests" },
        { name: "Lista Respuestas", link: "/listResponses" },
      ],
    },
    {
      id: "sales",
      title: "Ventas",
      icon: "hugeicons:wallet-02",
      color: "#7e7e8f",
      items: [
        { name: "Nueva Venta", link: "/newSale" },
        { name: "Lista Ventas", link: "/listSales" },
        { name: "Cuotas", link: "/quotes" },
        { name: "Proformas", link: "/proformas" },
        { name: "Facturas", link: "/invoices" },
      ],
    },
  ];
 */
