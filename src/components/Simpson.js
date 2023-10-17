
const Simpson = ({arr}) => {
    let {id,name,age,info,img} = arr

    return (
        <div>
            <h1>ID:{id}</h1>
            <h2>NAME:{name}</h2>
            <h2>AGE:{age}</h2>
            <p>info:{info}</p>
            <img src={img} alt={name}/>
            <hr/>
        </div>
    );
};

export {Simpson};