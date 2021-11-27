import React, { FC, useEffect, useRef } from 'react';
import cn from 'classnames';

import s from './modal.module.css';

interface modalProps {
    title: string;
    children: typeof React.Component | React.FC;
    isOpen: boolean;
    onCloseModal: () => void;
}

const Modal:FC<modalProps> = ({ 
    title, 
    children, 
    isOpen, 
    onCloseModal = (f:void) => f,

}) => {

    const modalEl = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if(isOpen) {
            const selector = document.querySelector('body') as HTMLElement;
            selector.style.overflow = 'hidden';
        }
    }, [isOpen]);

    const handleCloseModal = () => {
        onCloseModal();
    };

    const handleClickRoot = (e: React.MouseEvent) => {
        if(!modalEl.current?.contains(e.target as HTMLElement)) {
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
