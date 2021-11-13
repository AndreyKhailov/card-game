import { useState } from 'react';

import { Button } from '../../components';

import s from './loginForm.module.css';

function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignIn, setSignIn] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit && onSubmit({email, password, isSignIn});
        setEmail('');
        setPassword('');
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
