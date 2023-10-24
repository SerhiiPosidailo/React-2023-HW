import React, {useEffect, useState} from 'react';

import {userService} from "../../Service/userAxiosService";
import {Users} from "./Users";
import {UserForms} from "./UserForms";

const UsersContainer = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            <UserForms setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {UsersContainer};