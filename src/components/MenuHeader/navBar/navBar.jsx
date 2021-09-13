import s from './navBar.module.css';

function NavBar({ activeMenu, onChangeActive }) {
    const onClickButtonMenu = () => {
        onChangeActive();
    };

    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>LOGO</p>
                <button
                    className={`${s.menuButton} ${activeMenu ? s.active : ''}`}
                    onClick={onClickButtonMenu}
                >
                    <span />
                </button>
            </div>
        </nav>
    )
}

export default NavBar;
