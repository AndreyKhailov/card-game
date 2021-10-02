import cn from 'classnames';

import {ReactComponent as LoginSVG} from '../../../asserts/svg/login.svg';

import s from './navBar.module.css';

function NavBar({ activeMenu, bgActive = false, onChangeActive, onClickLogin }) {
    
    const onClickButtonMenu = () => {
        onChangeActive && onChangeActive();
    };

    const onClickLoginIcon = () => {
        onClickLogin && onClickLogin();
    };

    return (
        <nav className={cn(s.root, {[s.bgActive]: bgActive})}>
            <div className={s.navWrapper}>
                <p className={s.brand}>LOGO</p>
                <div className={s.loginAndMenu}>
                    <div 
                        className={s.loginWrap}
                        onClick={onClickLoginIcon}
                    >
                        <LoginSVG />
                    </div>
                    <button
                        className={cn(s.menuButton, {[s.active]: activeMenu})}
                        onClick={onClickButtonMenu}
                    >
                        <span />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
