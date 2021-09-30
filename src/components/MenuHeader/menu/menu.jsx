import { Link } from 'react-router-dom';
import cn from 'classnames';

import s from './menu.module.css';

const MENU = [
    {
        title: "home",
        to: '/'
    },
    {
        title: "game",
        to: '/game'
    },
    {
        title: "about",
        to: '/about'
    },
    {
        title: "contact",
        to: '/contacts'
    },
];

function Menu({ activeMenu, closeMenu }) {
    
    const onCloseMenu = () => {
        onCloseMenu && closeMenu();
    };

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
