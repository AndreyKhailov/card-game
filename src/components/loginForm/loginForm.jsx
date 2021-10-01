import { useState } from 'react';
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

    const handleLogin = (e) => {
        e.preventDefault();

        setSignIn(prevState => !prevState);
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
            <div className={s.form_btn}>
                <button>
                    { isSignIn ? 'SignIn' : 'SignUp' }
                </button>
                <button 
                    className={s.reg_btn}
                    onClick={(e) => handleLogin(e)}
                >
                    { isSignIn ? 'Registration?' : 'Login?' }
                </button>
            </div>
        </form>
    )
}

export default LoginForm;
