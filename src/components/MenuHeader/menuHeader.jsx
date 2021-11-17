import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Menu, NavBar } from "./";
import { Modal, LoginForm } from "../";

import { submitForm, selectUserLoading } from '../../store/user';

function MenuHeader({ bgActive }) {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectUserLoading);
    const [activeMenu, setActiveMenu] = useState(null);
    const [isOpenModal, setOpenModal] = useState(false);

    useEffect(() => {
        isAuth && setOpenModal(false)
    }, [isAuth])

    const handleButtonMenu = () => {
        setActiveMenu(prevState => !prevState);
    };

    const handleClickModal = () => {
        setOpenModal(prevState => !prevState);
    };

    const handleSubmitForm = ({ email, password, isSignIn }) => {
        dispatch(submitForm({ email, password, isSignIn }))
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
                title='Auth...'
            >
                <LoginForm onSubmit={handleSubmitForm} />
            </Modal>
        </>
    )
}

export default MenuHeader;
