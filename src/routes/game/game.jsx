import { useHistory } from 'react-router';

import s from './game.module.css';

function Game() {
    const history = useHistory();

    const onClickGoToHome = () => {
        history.push('/');
    };

    return (
        <div className={s.game}>
            <h1>This is start game</h1>
            <button 
                
                onClick={onClickGoToHome}
            >
                Home
            </button>
        </div>
    )
}

export default Game;
