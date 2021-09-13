import React from 'react';

import { Menu, NavBar } from "./";

function MenuHeader() {
    const [activeMenu, setActiveMenu] = React.useState(false);

    const handleButtonMenu = () => {
        setActiveMenu(prevState => !prevState);
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
