import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
