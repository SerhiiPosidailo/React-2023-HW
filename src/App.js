import React from 'react';

import {UsersContainer} from "./components/userComponents/UsersContainer";
import {CommentContainer} from "./components/CommentsComponents/CommentContainer";

const App = () => {
    return (
        <div>
                {/*<UsersContainer/>*/}
            <CommentContainer/>
        </div>
    );
};

export {App};