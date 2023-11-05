import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {userService} from "./services/userService";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostsPage} from "./pages/PostsPage";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {postsService} from "./services/postsService";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UsersPage/>, loader: () => userService.getAll()},
            {
                path: 'users/:userId', element: <UserDetailsPage/>, children: [
                    {path: 'posts', element: <PostsPage/>}
                ]
            },
            {
                path: 'users/:userId/posts/:postId',
                element: <PostDetailsPage/>,
                loader: ({params:{postId}}) => postsService.getById(postId)
            }
        ]
    }
])

export {router}