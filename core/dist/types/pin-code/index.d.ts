import React, { CSSProperties } from 'react';
import { SizePinCode } from "./types";
export interface PinCodeProps {
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    autofocus?: boolean;
    values: Array<string>;
    setValues: (values: Array<string>) => void;
    className?: string;
    style?: CSSProperties;
    size?: SizePinCode;
}
export declare const PinCode: React.FC<PinCodeProps>;
export * from "./types";
