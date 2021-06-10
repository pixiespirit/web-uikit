import React from 'react';
import s from '@/avatar/styles/avatar.module.css';
import { SizeAvatar } from '@/avatar/types';

export interface AvatarProps {
  src: string;
  alt?: string;
  /**
   * Width and height are in pixels (px)
   */
  width?: number;
  height?: number;

  size?: SizeAvatar;
  circle?: boolean;
  fullWidth?: boolean;
}

const getClass = (props: AvatarProps): string => {
  const classes: Array<string> = [s.avatar];

  /**
   * Avatar size style
   * Default: medium
   */
  switch (props.size) {
    case SizeAvatar.MEDIUM:
    default:
      classes.push(s.medium);
      break;

    case SizeAvatar.SMALL:
      classes.push(s.small);
      break;
  }

  if (props.circle) classes.push(s.circle);
  if (props.fullWidth) classes.push(s.fullWidth);
  return classes.join(' ');
};

export const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      className={getClass(props)}
    />
  );
};

export * from '@/avatar/types';
