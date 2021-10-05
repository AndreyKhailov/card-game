import cn from 'classnames';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {selectUserLoading, selectLocalID} from '../../../store/user';

import {ReactComponent as LoginSVG} from '../../../asserts/svg/login.svg';
import {ReactComponent as UserSVG} from '../../../asserts/svg/user.svg';

import s from './navBar.module.css';

function NavBar({ activeMenu, bgActive = false, onChangeActive, onClickLogin }) {
    const isLoadingUser = useSelector(selectUserLoading);
    const localID = useSelector(selectLocalID);
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
                    {(!isLoadingUser && !localID) && (
                        <div 
                            className={s.loginWrap}
                            onClick={onClickLoginIcon}
                        >
                            <LoginSVG />
                        </div>
                    )} 
                    {(!isLoadingUser && localID) && (
                        <Link 
                            className={s.loginWrap}
                            to="/login"
                        >
                            <UserSVG />
                        </Link>
                    )} 
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
