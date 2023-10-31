import {useLoaderData} from "react-router-dom";

import {Posts} from "../components/PostsComponents/Posts";

const PostsPage = () => {

    const {data} = useLoaderData()
    return (
        <div>
            <Posts posts={data}/>

        </div>
    );
};

export {PostsPage};