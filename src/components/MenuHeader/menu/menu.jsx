import s from './menu.module.css';

const MENU = [
    {
        title: "home",
        to: '#home'
    },
    {
        title: "game",
        to: '#game'
    },
    {
        title: "about",
        to: '#about'
    },
    {
        title: "contact",
        to: '#contact'
    },
];

function Menu({ activeMenu }) {
    
    return (
        <div className={`${s.menuContainer} ${activeMenu ? s.active : s.deactive}`}>
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>
                    {
                        MENU.map(({title, to}, index) => (
                            <li key={index}>
                                <a href={to}>{title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu;
