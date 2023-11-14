import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {CarPage} from "./pages/carPage/CarPage";

const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'cars'}/>},
            {path:'cars', element:<CarPage/>}
        ]},

]);

export {
    router
}