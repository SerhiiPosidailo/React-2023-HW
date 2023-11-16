import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layout";
import {CharactersPage, EpisodePage} from "./pages";


const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'episode'}/>},
            {path:'episode', element:<EpisodePage/>},
            {path:'characters/:ids', element: <CharactersPage/>}
        ]}
]);

export {
    router
}