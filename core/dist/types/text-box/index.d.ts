import React from 'react';
export declare const Textbox: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLInputElement> & Partial<{
    size: 'small' | 'medium' | 'large';
    invalid: boolean;
    addonLeft: JSX.Element | string;
    addonRight: JSX.Element | string;
    iconLeft: JSX.Element | string;
    iconRight: JSX.Element | string;
    disabled?: boolean | undefined;
    onClickLeftIcon?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onClickRightIcon?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onClickLeftAddon?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onClickRightAddon?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
}> & React.RefAttributes<HTMLInputElement>>;
