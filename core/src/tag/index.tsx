import React, { CSSProperties } from 'react';
import { KindTag } from './types';
import s from './styles/tag.module.css';
import primary from './styles/primary.module.css';
import warning from './styles/warning.module.css';
import { Body3 } from '../typography/body';

export interface TagProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;

  kind?: KindTag;
}

const getClass = (props: TagProps): string => {
  const classes: Array<string> = [s.tag];

  /**
   * Tag kind style
   * Default: primary
   */
  switch (props.kind) {
    case KindTag.WARNING:
      classes.push(warning.root);
      break;

    case KindTag.PRIMARY:
    default:
      classes.push(primary.root);
      break;
  }

  if (props.className) classes.push(props.className);

  return classes.join(' ');
};

export const Tag: React.FC<TagProps> = (props) => {
  const tagChildren =
    typeof props.children === 'string' ? (
      <Body3 children={props.children} />
    ) : (
      props.children
    );

  return (
    <span
      style={props.style}
      className={getClass(props)}
      children={tagChildren}
    />
  );
};

export * from './types';
