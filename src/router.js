import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {usersService} from "./service/usersService";
import {UserDetailPage} from "./pages/UserDetailPage";
import {PostsPage} from "./pages/PostsPage";
import {postService} from "./service/postService";
import {PostDetailPage} from "./pages/PostDetailPage";
import {CommentsPage} from "./pages/CommentsPage";
import {commentsService} from "./service/commentsService";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UsersPage/>, loader: () => usersService.getAll()}
        ]
    },
    {
        path: 'users/:userId',
        element: <UserDetailPage/>,
        loader: ({params: {userId}}) => usersService.getDetails(userId),
        children: [
            {
                path: '/users/:userId/posts',
                element: <PostsPage/>,
                loader: ({params: {userId}}) => postService.getByUserId(userId)
            }
        ]
    },
    {
        path: 'posts/:id',
        element: <PostDetailPage/>,
        loader: ({params: {id}}) => postService.getPostById(id),
        children: [
            {
                path: 'comments',
                element: <CommentsPage/>,
                loader: ({params: {id}}) => commentsService.getComments(id)
            }
        ]
    }
])

export {router}