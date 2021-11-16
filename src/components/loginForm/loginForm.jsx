import { useState } from 'react';
import { NotificationManager } from 'react-notifications';

import { Button } from '../../components';
import useInput from './hooks/useInput';
import userSchema from './validation/userSchema';

import s from './loginForm.module.css';

function LoginForm({ onSubmit = f => f }) {
    const [emailProps, resetEmail] = useInput('');
    const [passwordProps, resetPassword] = useInput('');
    const [isSignIn, setSignIn] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: emailProps.value, 
            password: passwordProps.value,
        };

        userSchema.isValid(data).then((valid) => {
            if (valid) {
                onSubmit({ ...data, isSignIn });
                resetEmail('');
                resetPassword('');
            } else {
                NotificationManager.error(valid, 'Некорректный email или пароль!');
            };
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setSignIn(prevState => !prevState);
    };

    const handleBtn = (emailProps.value.trim() && passwordProps.value.trim())

    return (
        <form onSubmit={handleSubmit}>
            <div className={s.root}>
                <input 
                    type="text" 
                    className={s.input}
                    {...emailProps}
                    required
                />
                <span className={s.highlight}></span>
                <span className={s.bar}></span>
                <span className={s.example}>Например: example@example.com</span>
                <label className={s.label}>e-mail</label>
            </div>
            <div className={s.root}>
                <input 
                    type="text" 
                    className={s.input}
                    {...passwordProps}
                    required
                />
                <span className={s.highlight}></span>
                <span className={s.bar}></span>
                <span className={s.example}>Пароль должен содержать от 6 до 25 символов</span>
                <label className={s.label}>Пароль</label>
            </div>
            <div className={s.form_btn}>
                <Button isDisabled={!handleBtn}>
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
