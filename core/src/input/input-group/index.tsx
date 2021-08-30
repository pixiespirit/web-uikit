import { cloneElement } from 'react';
import s from './index.module.css';
import { cx } from '@/utils/dom';
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import { getValidChildren } from '@/utils/getValidChildren';
import { SFC } from '@/input/types';

export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const InputGroup: SFC<InputGroupProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const _className = cx(s.wrapper, props.className);
    const validChildren = getValidChildren(props.children);
    const groupStyles: any = {};

    validChildren.forEach((child: any) => {
      if (child.type.id === 'InputLeftIcon') {
        const imageSize =
          child?.props?.children?.props?.size ??
          child?.props?.children?.props?.width ??
          16;
        groupStyles.style = {
          paddingLeft: imageSize * 2,
          ...child.props.style
        };
      }
      if (child.type.id === 'InputRightIcon') {
        const imageSize =
          child?.props?.children?.props?.size ??
          child?.props?.children?.props?.width ??
          16;
        groupStyles.style = {
          paddingRight: imageSize * 2,
          ...child.props.style
        };
      }
    });

    const clones = validChildren.map((child: any) => {
      return child.type.id !== 'Input'
        ? cloneElement(child, child.props)
        : cloneElement(child, {
            ...groupStyles,
            ...child.props
          });
    });
    // console.log(clones)

    return (
      <div className={_className} ref={ref}>
        {clones}
      </div>
    );
  }
);

InputGroup.id = 'InputGroup';
