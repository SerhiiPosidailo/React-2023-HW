import {Outlet, useLoaderData} from "react-router-dom";

import {PostsDetails} from "../components/PostsComponents/PostsDetails";

const PostDetailPage = () => {

    const {data} = useLoaderData()

    return (
        <div>
            <PostsDetails postDetails={data}/>
            <Outlet/>
        </div>
    );
};

export {PostDetailPage};