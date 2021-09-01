import { Avatar, H3, SizeAvatar } from '@pixiepkg/core';
import React from 'react';
import { container, row } from './_shared-styles';

const avatarUrl = 'https://www.tinygraphs.com/squares/pixie?theme=sugarsweets';

export const GalleryAvatar = (): JSX.Element => {
    return (
        <div style={container}>
            <H3 bold>Avatars</H3>
            <div style={row}>
                <Avatar src={avatarUrl} />
                <Avatar src={avatarUrl} circle />
                <Avatar src={avatarUrl} size={SizeAvatar.SMALL} />
                <Avatar src={avatarUrl} size={SizeAvatar.SMALL} circle />
            </div>
            <div style={row}>
                <Avatar src={avatarUrl} height={70} width={70} />
                <Avatar src={avatarUrl} height={70} width={70} circle />
                <Avatar src={avatarUrl} height={60} width={60} />
                <Avatar src={avatarUrl} height={60} width={60} circle />
                <Avatar src={avatarUrl} height={50} width={50} />
                <Avatar src={avatarUrl} height={50} width={50} circle />
            </div>
        </div>
    );
};
