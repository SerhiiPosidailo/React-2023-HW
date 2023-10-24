import React from 'react';

import {UsersContainer} from "./Components/userComponents/UsersContainer";
import {CommentContainer} from "./Components/CommentsComponents/CommentContainer";

const App = () => {
    return (
        <div>
                {/*<UsersContainer/>*/}
            <CommentContainer/>
        </div>
    );
};

export {App};