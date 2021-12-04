import React, { FC, useState } from 'react';

import { Button } from '..';
import useInput from './hooks/useInput';

import s from './loginForm.module.css';

interface IFormValue {
    email: string;
    password: string;
}

interface ILoginForm {
    onSubmit: (f:{}) => IFormValue;
}

const LoginForm:FC<ILoginForm> = ({ onSubmit }) => {
    const [emailProps, resetEmail] = useInput('');
    const [passwordProps, resetPassword] = useInput('');
    const [isSignIn, setSignIn] = useState<boolean>(true);

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        onSubmit && onSubmit({
            email: emailProps.value, 
            password: passwordProps.value, 
            isSignIn,
        });
        resetEmail('');
        resetPassword('');
    };

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSignIn(prevState => !prevState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={s.root}>
                <input 
                    type='email'
                    className={s.input}
                    {...emailProps}
                />
                <span className={s.highlight}></span>
                <span className={s.bar}></span>
                <span className={s.message}>Например: example@example.com</span>
                <label className={s.label}>e-mail</label>
            </div>
            <div className={s.root}>
                <input 
                    className={s.input}
                    pattern='^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*-_]).{6,25}$'
                    {...passwordProps}
                />
                <span className={s.highlight}></span>
                <span className={s.bar}></span>
                <span className={s.message}>Пароль должен содержать 6-25 разных символов. Например: E$5hd?2</span>
                <label className={s.label}>Пароль</label>
            </div>
            <div className={s.form_btn}>
                <Button>
                    { isSignIn ? 'Войти' : 'Создать' }
                </Button>
                <button 
                    className={s.reg_btn}
                    onClick={(e) => handleLogin(e)}
                >
                    { isSignIn ? 'Зарегистрированны?' : 'Есть логин?' }
                </button>
            </div>
        </form>
    )
}

export default LoginForm;
