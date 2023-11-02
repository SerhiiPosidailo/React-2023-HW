import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {EpisodePage} from "./pages/EpisodePage";
import {CharacterPage} from "./pages/CharacterPage";


const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'episode'}/>},
            {path:'episode', element:<EpisodePage/>},
            {path:'characters/', element: <CharacterPage/>}
        ]}
])

export {
    router
}