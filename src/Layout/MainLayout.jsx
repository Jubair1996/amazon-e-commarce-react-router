import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";
import Spinner from "../components/Spinner/Spinner";
const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar></Navbar>

      {navigation.state === "loading" ? (
        <Spinner></Spinner>
      ) : (
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
