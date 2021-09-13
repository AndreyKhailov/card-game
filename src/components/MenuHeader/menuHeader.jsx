import React from 'react';

import Menu from "./menu/menu";
import NavBar from "./navBar/navBar";

function MenuHeader() {
    const [activeMenu, setActiveMenu] = React.useState(false);

    const handleButtonMenu = () => {
        setActiveMenu(!activeMenu);
    };

    return (
        <>
            <NavBar 
                activeMenu={activeMenu}
                onChangeActive={handleButtonMenu}
            />
            <Menu 
                activeMenu={activeMenu}
            />
        </>
    )
}

export default MenuHeader;
