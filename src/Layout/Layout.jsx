import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <div><Toaster position="top-right" /></div>
        </div>
    );
};

export default Layout;