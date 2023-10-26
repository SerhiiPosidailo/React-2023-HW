import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {TodosPage} from "./pages/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostsPage} from "./pages/PostsPage";


const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {path:'/todos', element:<TodosPage/>},
            {path:'/albums', element:<AlbumsPage/>},
            {path:'/comments', element:<CommentsPage/>},
            {path:'comments/posts', element:<PostsPage/>}

        ]
    },

]);


export {router}