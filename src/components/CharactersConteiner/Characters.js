import {Character} from "./Character";


const Characters = ({characters}) => {

    return (
        <div>
            {characters.map(character => <Character key={character} character={character}/>)}
        </div>
    );
};

export {Characters};