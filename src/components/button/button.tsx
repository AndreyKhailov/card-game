import React from 'react';
import cn from 'classnames';

import s from './button.module.css';

interface ButtonProps {
    isDisabled?: boolean;
    children: string;
    onClick: () => void;
};

const Button:React.FC<ButtonProps> = ({onClick = (f:void) => f, isDisabled=false, children}) => {

    return (
        <button 
            className={cn(s.button, {[s.disabled]: isDisabled})}
            onClick={() => onClick()}
            disabled={ isDisabled }
        >
           {children}
        </button>
    )
}

export default Button;
