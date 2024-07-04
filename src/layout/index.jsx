import { Outlet } from "react-router-dom";
import Header from "../components/shared/header";
import Footer from "../components/shared/footer";

const Layout = () => {
  return <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
}

export default Layout;
