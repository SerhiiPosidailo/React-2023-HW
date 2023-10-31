import {Comments} from "../components/CommentsComponents/Comments";
import {useLoaderData} from "react-router-dom";

const CommentsPage = () => {

    const {data} = useLoaderData();

    return (
        <div>
            <h1>Comments</h1>
            <Comments comments={data}/>
        </div>
    );
};

export {CommentsPage};