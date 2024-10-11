import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {userService} from "../../service/dummyjson.api.service";
import User from "../user/User";

type UserProps = {
    lift: (id:number) => void;
}

const Users: FC<UserProps> = ({lift}) => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const getUsers = async () => {
            setUsers(await userService.getUsers());
        }
        getUsers();
    }, []);
    return (
        <div>
            {
                users.map(value => <User lift={lift}
                                         item = {value}/> )
            }
        </div>
    );
};

export default Users;