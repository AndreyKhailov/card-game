import s from './game.module.css';

function Game() {
    const onClickGoToHome = () => {
        console.log('onClickGoToHome');
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
