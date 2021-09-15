import cn from 'classnames';

import s from './navBar.module.css';

function NavBar({ activeMenu, bgActive = false, onChangeActive }) {
    const onClickButtonMenu = () => {
        onChangeActive && onChangeActive();
    };

    return (
        <nav className={cn(s.root, {[s.bgActive]: bgActive})}>
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
