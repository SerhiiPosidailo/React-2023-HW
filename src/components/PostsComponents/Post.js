import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

    const {title, id} = post;

    const navigate = useNavigate();

    return (
        <div>
            <div>title: {title}</div>
            <button onClick={() => navigate(`/posts/${id}`)}>Post of Details</button>
        </div>
    );
};

export {Post};