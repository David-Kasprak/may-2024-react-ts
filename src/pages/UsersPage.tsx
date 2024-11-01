import React, {useEffect, useState} from 'react';
import {useStore} from "../store/store";
import {IUser} from "../models/IUser";

const UsersPage = () => {

    let {userSlice:{loadUsers, allUsers}} = useStore();
    // const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                loadUsers(value)
            });
    }, []);

    return (
        <ul>
            {allUsers.map(user => (<li key={user.id}>{user.name}</li>))}
        </ul>
    );
};

export default UsersPage;