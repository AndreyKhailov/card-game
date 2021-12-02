import { FC } from 'react';
import cn from 'classnames';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {selectUserLoading, selectLocalID} from '../../../store/user';

import {ReactComponent as LoginSVG} from '../../../asserts/svg/login.svg';
import {ReactComponent as UserSVG} from '../../../asserts/svg/user.svg';

import s from './navBar.module.css';

interface navBarProps {
    activeMenu: boolean | null;
    bgActive: boolean;
    onChangeActive: () => void; 
    onClickLogin: () => void;
};

const NavBar:FC<navBarProps> = ({ 
    activeMenu, 
    bgActive = false, 
    onChangeActive = (f:void) => f, 
    onClickLogin = (f:void) => f,
}) => {
    const isLoadingUser:boolean = useSelector(selectUserLoading);
    const localID:string = useSelector(selectLocalID);
    
    const onClickButtonMenu = () => onChangeActive();

    const onClickLoginIcon = () => onClickLogin();

    return (
        <nav className={cn(s.root, {[s.bgActive]: bgActive})}>
            <div className={s.navWrapper}>
                <p className={s.brand}>Triple Triad</p>
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
                            to="/card-game/user"
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
