import React, { CSSProperties } from 'react';
import { KindTag } from '@/tag/types';
import s from '@/tag/styles/tag.module.css';
import primary from '@/tag/styles/primary.module.css';
import warning from '@/tag/styles/warning.module.css';
import { Body3 } from '@/typography/body';

export interface TagProps {
  children: string;
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

const TagChildren: React.FC<TagProps> = (props) => {
  return <Body3 children={props.children} />;
};

export const Tag: React.FC<TagProps> = (props) => {
  return (
    <span
      style={props.style}
      className={getClass(props)}
      children={<TagChildren children={props.children} />}
    />
  );
};

export * from '@/tag/types';
