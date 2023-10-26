import {Outlet} from "react-router-dom";

import {HomeComponents} from "../components/HomeComponents/HomeComponents";


const MainLayout = () => {
    return (
        <div>
            <HomeComponents/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};