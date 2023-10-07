import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <h1>this is min</h1>
        </div>
    );
};

export default Layout;