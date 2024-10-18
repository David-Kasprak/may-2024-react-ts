import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {apiService} from "../services/api.service";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        apiService.userService.getAll().then(value => setUsers(value));
    }, []);
    return (
        <div>
            {
                users.map(value => <div>{value.name}</div>)
            }
        </div>
    );
};

export default UsersPage;