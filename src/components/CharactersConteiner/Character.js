import React, {useEffect, useState} from 'react';

import {characterService} from "../../service/characterService";


const Character = ({character:item}) => {
    const [character, setCharacter] = useState(null)


    useEffect(() => {
        characterService.getCharacters(item).then(({data})=> setCharacter(data))
    }, [item]);


    return (
        <div>
            {character && <div>id: {character.id}</div>}
            {character && <div>name: {character.name}</div>}
            {character && <img src={character.image} alt={character.name}/>}
        </div>
    );
};

export {Character};