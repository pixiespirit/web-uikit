import React from 'react';
export declare const Textbox: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLInputElement> & Partial<{
    size: 'small' | 'medium' | 'large';
    invalid: boolean;
    addonBefore: JSX.Element | string;
    addonAfter: JSX.Element | string;
    iconBefore: JSX.Element | string;
    iconAfter: JSX.Element | string;
    disabled?: boolean | undefined;
}> & React.RefAttributes<HTMLInputElement>>;
