import { useState } from 'react';
import s from './loginForm.module.css';

function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit && onSubmit({email, password});
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={s.root}>
                <input 
                    type="text" 
                    className={s.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <span className={s.highlight}></span>
                <span className={s.bar}></span>
                <label className={s.label}>Email</label>
            </div>
            <div className={s.root}>
                <input 
                    type="text" 
                    className={s.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <span className={s.highlight}></span>
                <span className={s.bar}></span>
                <label className={s.label}>Password</label>
            </div>
            <button>
                Login
            </button>
        </form>
    )
}

export default LoginForm;
