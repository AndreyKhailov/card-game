import { useHistory } from 'react-router';

import s from './header.module.css';

function Header({ title, desc }) {
    const history = useHistory();

    const onClickToStartGame = () => {
        history.push('/game');
    };

    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{desc}</p>
                <button 
                    onClick={onClickToStartGame}
                >
                    Start Game
                </button>
            </div>
        </header>
    )
}

export default Header;
