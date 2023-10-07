import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <h1>this is min</h1>
        </div>
    );
};

export default Layout;