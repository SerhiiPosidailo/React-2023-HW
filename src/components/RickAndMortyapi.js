import {Onepersonag} from "./Onepersonag"

let persons = [
    {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
        id: 3,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
        id: 619,
        name: "Professor Sanchez",
        status: "Dead",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/619.jpeg",
    },
    {
        id: 255,
        name: "Orthodox Jew",
        status: "Alive",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/255.jpeg",
    },
    {
        id: 10,
        name: "Alan Rails",
        status: "Dead",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
    }
]
const RickAndMortyapi = () => {
    return (
        <div>
            {persons.map(persona =><Onepersonag key={persona.id} hero={persona}/>)}
        </div>
    );
};

export {RickAndMortyapi};