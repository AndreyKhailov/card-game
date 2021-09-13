import cn from 'classnames';

import s from './navBar.module.css';

function NavBar({ activeMenu, onChangeActive }) {
    const onClickButtonMenu = () => {
        onChangeActive && onChangeActive();
    };

    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>LOGO</p>
                <button
                    className={cn(s.menuButton, {[s.active]: activeMenu})}
                    onClick={onClickButtonMenu}
                >
                    <span />
                </button>
            </div>
        </nav>
    )
}

export default NavBar;
