import React from 'react';
export interface CardThumbnailProps {
    thumbnail: string;
    thumbnailAlt?: string;
    thumbnailHeight?: number;
    fullHeight?: boolean;
    children: React.ReactNode;
}
export declare const CardThumbnail: React.FC<CardThumbnailProps>;
