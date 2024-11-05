import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="h-[calc(100vh-50px)]">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default MainLayout;
