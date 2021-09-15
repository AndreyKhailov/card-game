import React from 'react';

import { Menu, NavBar } from "./";

function MenuHeader({ bgActive }) {
    const [activeMenu, setActiveMenu] = React.useState(null);

    const handleButtonMenu = () => {
        setActiveMenu(prevState => !prevState);
    };

    return (
        <>
            <NavBar 
                activeMenu={activeMenu}
                onChangeActive={handleButtonMenu}
                bgActive={bgActive}
            />
            <Menu 
                activeMenu={activeMenu}
                closeMenu={handleButtonMenu}
            />
        </>
    )
}

export default MenuHeader;
