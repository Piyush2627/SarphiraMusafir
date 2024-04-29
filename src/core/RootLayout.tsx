import Footer from "../components/Footer/Footer";
import NavgationBar from "../components/common/NavgationBar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <NavgationBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
