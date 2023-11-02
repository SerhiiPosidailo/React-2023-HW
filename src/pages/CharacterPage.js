import {useLocation} from "react-router-dom";

import {Characters} from "../components/CharactersConteiner/Characters";


const CharacterPage = () => {
    const {state:{characters}} = useLocation();

    return (
        <div>
            <Characters characters={characters}/>
        </div>
    );
};

export {CharacterPage};