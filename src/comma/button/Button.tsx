import classNames from 'classnames';
import React, {ReactNode} from 'react';
import 'comma/button/button.css';

export type ButtonColorTheme = 'error' | 'warning' | 'opener'
type ButtonProps = {
    name?: string,
    clickHandle?: (e: any) => void
    className?: string,
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean,
    children?: ReactNode
    colorTheme?: ButtonColorTheme
    blue?: boolean,
}

export const Button: React.FC<ButtonProps> = ({ name, clickHandle, className, type = 'button', disabled, children, colorTheme, blue }) => {
    return (
        <button onClick={clickHandle} type={type} className={classNames(className, 'button', {
            'button-error': colorTheme === 'error',
            'blue-button': blue,
        })}
            disabled={disabled}
        >
            {children}
            {name && <span className="button-name">{name}</span>}
        </button>
    )
}

