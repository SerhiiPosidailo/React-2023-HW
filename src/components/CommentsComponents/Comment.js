import {useParams} from "react-router-dom";

const Comment = ({comment}) => {

    const {name, email, body} = comment;

    const {id} = useParams()

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export {Comment};