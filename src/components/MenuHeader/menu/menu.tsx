import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { rootUrl } from '../../../rootUrl';

import s from './menu.module.css';

const MENU = [
    {
        title: "home",
        to: rootUrl,
    },
    {
        title: "game",
        to: `${rootUrl}/game`
    },
    {
        title: "about",
        to: `${rootUrl}/about`
    },
    {
        title: "contact",
        to: `${rootUrl}/contacts`
    },
];

interface menuProps {
    activeMenu: boolean | null;
    closeMenu: () => void;
}

const Menu:FC<menuProps> = ({ activeMenu, closeMenu = (f:void) => f }) => {
    
    const onCloseMenu = () => closeMenu();

    return (
        <div className={cn(s.menuContainer, {
            [s.active]: activeMenu === true,
            [s.deactive]: !activeMenu === false,
        })}>
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>
                    {
                        MENU.map(({title, to}, index) => (
                            <li key={index} onClick={onCloseMenu}>
                                <Link to={to}>
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu;
