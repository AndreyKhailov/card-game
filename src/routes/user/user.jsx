import React from 'react'
import { useSelector } from 'react-redux';

import {selectUser} from '../../store/user';

function User() {
    const userData = useSelector(selectUser)

    return (
        <div>
            <h1>Info about user: {userData.email}</h1>
            <div>
                <email>email: {userData.email}</email>
                <p>Последнее обновление: {userData.lastRefreshAt}</p>
            </div>
            
        </div>
    )
}

export default User;
