import {useLocation} from "react-router-dom";

import {Posts} from "../components/PostsComponents/Posts";

const PostsPage = () => {

    const {state: postsId} = useLocation();

    return (
        <div>
            <Posts postsId={postsId}/>
        </div>
    );
};

export {PostsPage};