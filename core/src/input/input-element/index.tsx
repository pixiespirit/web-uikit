import s from './index.module.css';
import {cx} from "@/utils/dom";
import {FC, ForwardedRef, forwardRef} from "react";

export interface InputGroupProps {
  className?: string;
}

export const InputGroup:FC<InputGroupProps> = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const _className = cx(s.wrapper, props.className);
  return (
    <div className={_className} ref={ref}>
      {props.children}
    </div>
  )
});

