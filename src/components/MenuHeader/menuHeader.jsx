import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

import { Menu, NavBar } from "./";
import { Modal, LoginForm, ExitForm } from "../";

import { submitForm, error, success, auth, exitLogin } from '../../store/login';

function MenuHeader({ bgActive }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const successResponse = useSelector(success);
    const errorResponse = useSelector(error);
    // const isAuth = useSelector(auth);

    const [activeMenu, setActiveMenu] = useState(null);
    const [isOpenModal, setOpenModal] = useState(false);

    useEffect(() => {
        errorResponse 
            && NotificationManager.error(errorResponse, 'title');
        
        successResponse
            && handleClickModal()
            && NotificationManager.success('success', 'title')
    }, [errorResponse, successResponse]);

    const handleButtonMenu = () => {
        setActiveMenu(prevState => !prevState);
    };

    const handleClickModal = () => {
        setOpenModal(prevState => !prevState);
    };

    const handleSubmitForm = ({ email, password, isSignIn }) => {
        dispatch(submitForm({ email, password, isSignIn }))
    };

    // const handleExitLogin = () => {
    //     dispatch(exitLogin());
    //     handleClickModal();
    //     history.push('/');
    // };

    return (
        <>
            <NavBar 
                activeMenu={activeMenu}
                onChangeActive={handleButtonMenu}
                bgActive={bgActive}
                onClickLogin={handleClickModal}
            />
            <Menu 
                activeMenu={activeMenu}
                closeMenu={handleButtonMenu}
            />
            <Modal
                isOpen={isOpenModal}
                onCloseModal={handleClickModal}
                title='Auth...'
            >
                {/* { !isAuth  ? <LoginForm onSubmit={handleSubmitForm} />
                    : <ExitForm 
                        onCloseModal={handleClickModal}
                        onExitLogin={handleExitLogin}
                    />
                } */}
                <LoginForm onSubmit={handleSubmitForm} />
            </Modal>
        </>
    )
}

export default MenuHeader;
