import React, {useState} from 'react';

import { Menu, NavBar } from "./";
import { Modal } from "../";

function MenuHeader({ bgActive }) {

    const [activeMenu, setActiveMenu] = useState(null);
    const [isOpenModal, setOpenModal] = useState(false);

    const handleButtonMenu = () => {
        setActiveMenu(prevState => !prevState);
    };

    const handleClickModal = () => {
        setOpenModal(prevState => !prevState);
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
                input form
            </Modal>
        </>
    )
}

export default MenuHeader;
