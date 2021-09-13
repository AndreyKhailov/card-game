import s from './game.module.css';

function Game({ onChangePage }) {
    const onClickGoToHome = () => {
        onChangePage && onChangePage('home');
    };

    return (
        <div>
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
