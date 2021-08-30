import React, { ForwardedRef, forwardRef, HTMLAttributes} from 'react';
import s from './index.module.css';
import {cx} from "@/utils/dom";
import {SFC} from "@/input/types";

export const Input: SFC<HTMLAttributes<HTMLInputElement>> = forwardRef((props, ref:ForwardedRef<HTMLInputElement>) => {
  const _className = cx(s.input, props.className);
  return (
    <input
      ref={ref}
      className={_className}
      {...props}
    />
  );
});

Input.id = "Input";
