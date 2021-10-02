import { useEffect, useRef } from 'react';
import cn from 'classnames';

import s from './modal.module.css';

function Modal({ title, children, isOpen, onCloseModal }) {
    const modalEl = useRef();

    useEffect(() => {
        document.querySelector('body').style.overflow = isOpen && 'hidden';
    }, [isOpen]);

    const handleCloseModal = () => {
        onCloseModal && onCloseModal();
    };

    const handleClickRoot = (event) => {
        if(!modalEl.current.contains(event.target)) {
            handleCloseModal();
        };
    };

    return (
        <div 
            className={cn(s.root, {[s.open]: isOpen})}
            onClick={handleClickRoot}
        >
            <div 
                ref={modalEl}
                className={s.modal}
            >
                <div className={s.head}>
                    { title }
                    <span 
                        className={s.btnClose}
                        onClick={handleCloseModal}
                    ></span>
                </div>
                <div className={s.content}>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default Modal;
