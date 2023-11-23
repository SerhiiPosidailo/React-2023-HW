import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./mainLayouts/MainLayout";
import {Posts} from "./components/Posts/Posts";

const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'posts'}/>},
            {path:'posts', element:<Posts/>}
        ]}
]);

export {
    router
}