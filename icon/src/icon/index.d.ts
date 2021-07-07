import React from 'react';
export interface IconProps {
  display?: 'block' | 'inline';
  size?: number;
  color?: string;
  title?: string;
}
export declare const Icon: React.FC<IconProps>;
