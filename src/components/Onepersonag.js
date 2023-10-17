

const Onepersonag = ({hero}) => {
    let {id,name,image,status,species,gender} = hero
    return (
        <div>
            <h1>ID:{id}</h1>
            <h2>NAME:{name}</h2>
            <h3>STATUS:{status}</h3>
            <h3>GANDER:{gender}</h3>
            <img src={image} alt={name}/>
            <h3>SPECIES:{species}</h3>

            <hr/>
        </div>
    );
};

export {Onepersonag};