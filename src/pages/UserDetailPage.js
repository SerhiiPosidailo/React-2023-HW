import {Outlet, useLoaderData} from "react-router-dom";

import {UserDetails} from "../components/UsersComponents/UserDetails";

const UserDetailPage = () => {

    const {data} = useLoaderData();

    return (
        <div>
            <UserDetails userDetails={data}/>
            <hr/>
            <Outlet/>
            <hr/>
        </div>
    );
};

export {UserDetailPage};