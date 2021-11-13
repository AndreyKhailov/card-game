import React from 'react';
import cn from 'classnames';

import s from './button.module.css';

function Button({onClick = () => {}, isDisabled=false, children}) {

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
