import React from 'react'
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../../store/user';
import { exitLogin } from '../../store/login';

function User() {
    const history = useHistory();
    const dispatch = useDispatch();
    const userData = useSelector(selectUser);

    const onClickExitLogin = () => {
        dispatch(exitLogin());
        history.push('/');
    };

    return (
        <div>
            <h1>Info about user: {userData.email}</h1>
            <div>
                <email>email: {userData.email}</email>
                <p>Последнее обновление: {userData.lastRefreshAt}</p>
            </div>
            <button onClick={onClickExitLogin}>
                Выйти
            </button>
        </div>
    )
}

export default User;
