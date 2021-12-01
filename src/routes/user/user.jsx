import React from 'react'
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser, logout } from '../../store/user';
import { Button } from '../../components';
import { rootUrl } from '../../rootUrl';

import s from './user.module.css';

function User() {
    const history = useHistory();
    const dispatch = useDispatch();
    const userData = useSelector(selectUser);
    
    const onClickLogout = () => {
        dispatch(logout());
        history.push(`${rootUrl}`);
    };

    return (
        <div className={s.root}>
            <h1>Информация о пользователе:</h1>
            <div className={s.info}>
                <p>email: {userData.email}</p>
                <p>Последнее обновление: {userData.lastRefreshAt}</p>
            </div>
            <Button onClick={onClickLogout}>
                Выйти
            </Button>
        </div>
    )
}

export default User;
