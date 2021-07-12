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

interface Size {
  width: number;
  height: number;
}

const sizes: Record<SizeAvatar, Size> = {
  [SizeAvatar.SMALL]: { width: 48, height: 48 },
  [SizeAvatar.MEDIUM]: { width: 88, height: 88 }
};

const getClass = (props: AvatarProps): string => {
  const classes: Array<string> = [s.avatar];
  if (props.circle) classes.push(s.circle);
  if (props.fullWidth) classes.push(s.fullWidth);
  return classes.join(' ');
};

export const Avatar: React.FC<AvatarProps> = (props) => {
  const size: Size = props.size
    ? sizes[props.size]
    : {
        width: props.width ?? sizes[SizeAvatar.MEDIUM].width,
        height: props.height ?? sizes[SizeAvatar.MEDIUM].height
      };

  return (
    <img
      src={props.src}
      alt={props.alt}
      width={size.width}
      height={size.height}
      className={getClass(props)}
    />
  );
};

export * from '@/avatar/types';
