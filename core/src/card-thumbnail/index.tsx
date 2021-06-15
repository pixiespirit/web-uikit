import React from 'react';
import s from '@/card-thumbnail/styles/card-thumbnail.module.css';

export interface CardThumbnailProps {
  thumbnail: string;
  thumbnailAlt?: string;
  thumbnailHeight?: number;
  fullHeight?: boolean;
  children: React.ReactNode;
}

export const CardThumbnail: React.FC<CardThumbnailProps> = (props) => {
  const containerClasses = [s.card];
  if (props.fullHeight) containerClasses.push(s.fullHeight);
  return (
    <div className={containerClasses.join(' ')}>
      <div
        className={s.thumbnailWrapper}
        style={{ height: props.thumbnailHeight }}
      >
        <img
          className={s.thumbnail}
          src={props.thumbnail}
          alt={props.thumbnailAlt}
        />
      </div>
      <div className={s.body}>{props.children}</div>
    </div>
  );
};
