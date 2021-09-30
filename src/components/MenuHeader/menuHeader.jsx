import React, {useState} from 'react';

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

    const handleSubmitForm = (e) => {
        console.log('####', e)
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
