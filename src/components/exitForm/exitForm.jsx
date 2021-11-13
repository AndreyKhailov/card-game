import s from './exitForm.module.css';

function ExitForm({ onCloseModal, onLogout }) {

    const handleCloseModal = () => {
        onCloseModal && onCloseModal();
    };

    const handleExitLog = () => {
        onLogout && onLogout();
    };

    return (
        <div>
            <p>Вы действительно хотите выйти?</p>
            <div className={s.btn}>
                <button onClick={handleExitLog}>
                    Выйти
                </button>
                <button onClick={handleCloseModal}>
                    Отмена
                </button>
            </div>
        </div>
    )
}

export default ExitForm;
