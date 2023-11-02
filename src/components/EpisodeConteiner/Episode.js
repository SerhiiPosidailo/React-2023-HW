import {useNavigate} from "react-router-dom";

import css from "./Episode.module.css"
import {useAppContext} from "../../hooks/ussAppContext";


const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;
    const navigate = useNavigate();
    const {setEpisodeName} = useAppContext();

    return (
        <div className={css.Episode} onClick={()=>{
            navigate('/characters', {state:{characters}})
            setEpisodeName(name)
        }}>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>chapter: {chapter}</div>
        </div>


    );
};

export {
    Episode,
};