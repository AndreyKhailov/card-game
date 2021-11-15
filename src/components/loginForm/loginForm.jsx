import { useState } from 'react';

import { Button } from '../../components';
import useInput from './hooks/useInput';

import s from './loginForm.module.css';

function LoginForm({ onSubmit = f => f }) {
    const [emailProps, resetEmail] = useInput('');
    const [passwordProps, resetPassword] = useInput('');
    const [isSignIn, setSignIn] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        onSubmit({
            email: emailProps.value, 
            password: passwordProps.value, 
            isSignIn,
        });
        resetEmail('');
        resetPassword('');
    };

    const handleLogin = () => {
        setSignIn(prevState => !prevState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={s.root}>
                <input 
                    type="email" 
                    className={s.input}
                    {...emailProps}
                    required
                />
                <span className={s.highlight}></span>
                <span className={s.bar}></span>
                <label className={s.label}>e-mail</label>
            </div>
            <div className={s.root}>
                <input 
                    type="password" 
                    className={s.input}
                    {...passwordProps}
                    required
                />
                <span className={s.highlight}></span>
                <span className={s.bar}></span>
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
