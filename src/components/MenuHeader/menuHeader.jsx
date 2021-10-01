import React, {useState} from 'react';
import { NotificationManager } from 'react-notifications';

import { Menu, NavBar } from "./";
import { Modal, LoginForm } from "../";

function MenuHeader({ bgActive }) {

    const [activeMenu, setActiveMenu] = useState(null);
    const [isOpenModal, setOpenModal] = useState(false);

    const handleButtonMenu = () => {
        setActiveMenu(prevState => !prevState);
    };

    const handleClickModal = () => {
        setOpenModal(prevState => !prevState);
    };

    const handleSubmitForm = async ({ email, password }) => {
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
        };

        const responce = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7NgFky_QwA2UvwovY0Dry1qg1NjtoTuU', requestOptions).then(res => res.json());
        
        if (responce.hasOwnProperty('error')) {
            NotificationManager.error(responce.error.message, 'title')
        } else {
            NotificationManager.success('success', 'title')
        };
    };

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
                title='Login'
            >
                <LoginForm 
                    onSubmit={handleSubmitForm}
                />
            </Modal>
        </>
    )
}

export default MenuHeader;
