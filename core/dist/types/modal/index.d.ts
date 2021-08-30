import React from 'react';
export interface ModalProps {
    show?: boolean;
    setShow?: (show: boolean) => void;
    children: React.ReactNode;
}
export declare const Modal: React.FC<ModalProps>;
