import { NavLink, Outlet } from "react-router-dom";
import "./Layout.scss";
import Sidebar from "../Sidebar/Sidebar.js"

const Layout = () => {
  return (
    <div className="Layout">
      <Sidebar />
      <Outlet />
    </div>
  );
};  

export default Layout;
