import {useNavigate} from "react-router-dom";

const PostsDetails = ({postDetails}) => {

    const {id ,title, body} = postDetails


    const navigate = useNavigate();


    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={() => navigate(`comments`)}>click</button>
        </div>
    );
};

export {PostsDetails};