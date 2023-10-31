import {useNavigate, useParams} from "react-router-dom";

const UserDetails = ({userDetails}) => {
    const {
        id,
        name,
        username,
        email,
        address: {street, suite, city, zipcode},
        phone,
        website,
        company: {name: nameCom, catchPhrase, bs}
    } = userDetails;
    const {userId} = useParams()
    const navigate = useNavigate()

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>address: {street}, {suite}, {city}, {zipcode}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>company: {nameCom}, {catchPhrase}, {bs}</div>
            <button onClick={() => navigate(`/users/${userId}/posts`)}>post of current user</button>
        </div>
    );
};

export {UserDetails};