import React, { CSSProperties, KeyboardEvent, useEffect } from 'react';
import s from '@/pin-code/styles/pincode.module.css';
import { KeyCodeEnum, SizePinCode } from '@/pin-code/types';
import classnames from 'classnames';
import MultiRef from 'react-multi-ref';

export interface PinCodeProps {
  // Pin Code States
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  autofocus?: boolean;

  // Values
  values: Array<string>;
  setValues: (values: Array<string>) => void;

  // Styling
  className?: string;
  style?: CSSProperties;
  size?: SizePinCode;
}

export const PinCode: React.FC<PinCodeProps> = (props) => {
  const { values, setValues, size, error, errorMessage, autofocus } = props;
  const _inputRefs = new MultiRef<number, HTMLInputElement>();

  const isNumberKeyCode = (keyCode: string) => {
    return keyCode.includes(KeyCodeEnum.DIGIT_INDICATOR); // ex: 1='Digit1' and KeyCodeEnum.DIGIT='Digit'
  };

  const isNumberString = (str: string) => {
    return str.match(/^-?\d+$/);
  };

  const setInputValue = (value: string, inputIndex: number) => {
    setValues(
      values.map((v, i) => {
        if (i === inputIndex) {
          return value;
        }
        return v;
      })
    );
  };

  const handleOnChange = (text: string, inputIndex: number) => {
    if (text.length <= 2 && isNumberString(text)) {
      // new number or replace number
      if (inputIndex + 1 < values.length) {
        _inputRefs.map.get(inputIndex + 1)?.focus();
      }
    } else if (text.length === values.length && values[inputIndex] === '') {
      // paste same length empty input
      setValues(text.split(''));
      _inputRefs.map.get(values.length - 1)?.focus();
    } else if (text.length === values.length + 1 && values[inputIndex] !== '') {
      // paste same length but input not empty
      setValues(text.slice(0, values.length).split(''));
      _inputRefs.map.get(values.length - 1)?.focus();
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    inputIndex: number
  ) => {
    const keyCode = e.code;
    if (keyCode === KeyCodeEnum.BACKSPACE) {
      if (values[inputIndex] === '') {
        setInputValue('', inputIndex - 1);
        if (inputIndex - 1 >= 0) {
          _inputRefs.map.get(inputIndex - 1)?.focus();
        }
      } else {
        setInputValue('', inputIndex);
      }
    } else if (isNumberKeyCode(keyCode)) {
      // if hit number then update the input
      const digitChar = keyCode[keyCode.length - 1];
      setInputValue(digitChar, inputIndex);
    }
  };

  const handlePaste = (inputIndex: number) => {
    // move cursor to the start of the input for onChange paste
    _inputRefs.map.get(inputIndex)?.setSelectionRange(0, 0);
  };

  useEffect(() => {
    // parse to correct init values
    const newValues = values.map((v) =>
      isNumberString(v) && v.length === 1 ? v : ''
    );
    setValues(newValues);

    // auto focus
    if (autofocus && newValues.length > 0) {
      let didFocus = false;
      for (let i = 0; i < newValues.length; i++) {
        if (newValues[i] === '') {
          _inputRefs.map.get(i)?.focus();
          didFocus = true;
          break;
        }
      }
      if (!didFocus) {
        // focus end if all inputs filled
        _inputRefs.map.get(newValues.length - 1)?.focus();
      }
    }

    // just want to run once when comp mounted, so disable exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.pinCodeContainer}>
      <div>
        <div className={s.pinCodeWrapper}>
          {values.map((value, i) => {
            return (
              <input
                key={`pin-code-${i}`}
                value={value}
                onChange={(e) => handleOnChange(e.currentTarget.value, i)}
                className={classnames(
                  s.input,
                  error && s.inputError,
                  s[size || SizePinCode.DEFAULT]
                )}
                type="text"
                ref={_inputRefs.ref(i)} // left to right inputs ref
                onKeyDown={(e) => handleKeyDown(e, i)}
                inputMode="numeric"
                autoComplete="one-time-code"
                onPaste={() => handlePaste(i)}
                required
              />
            );
          })}
        </div>
        <p className={classnames(s.errorMessage, !error && s.errorHidden)}>
          {errorMessage}
        </p>
      </div>
    </div>
  );
};

export * from '@/pin-code/types';
