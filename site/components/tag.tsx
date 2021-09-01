import { Body3, H3, KindTag, Tag, DivPx } from '../../core/dist';
import React, { CSSProperties } from 'react';
import { container, row } from './_shared-styles';
import { SuitcaseSolid, GroupUserSolid } from '@pixiepkg/icon';

const tagCustom: CSSProperties = {
    backgroundColor: '#F1F5F9',
    color: '#525C66'
};

const tagCustomChildren: CSSProperties = {
    display: 'flex',
    alignItems: 'center'
};

export const GalleryTag = (): JSX.Element => {
    return (
        <div style={container}>
            <H3 bold>Tags</H3>
            <div style={row}>
                <Tag kind={KindTag.PRIMARY}>P2P call</Tag>
                <Tag kind={KindTag.PRIMARY}>Group call</Tag>
                <Tag kind={KindTag.WARNING}>Pending</Tag>
                <Tag kind={KindTag.WARNING}>Waiting for acceptance</Tag>
                <Tag kind={KindTag.PRIMARY} style={tagCustom}>
                    <div style={tagCustomChildren}>
                        <GroupUserSolid display="block" />
                        <DivPx size={4} />
                        <Body3>12/20 người</Body3>
                    </div>
                </Tag>
                <Tag kind={KindTag.PRIMARY} style={tagCustom}>
                    <div style={tagCustomChildren}>
                        <SuitcaseSolid display="block" />
                        <DivPx size={4} />
                        <Body3>NovaLand</Body3>
                    </div>
                </Tag>
            </div>
        </div>
    );
};
