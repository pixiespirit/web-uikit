import { Button, H3, KindButton, SizeButton } from '@pixiepkg/core';
import React from 'react';
import { container, row } from './_shared-styles';

export const RowButton = (): JSX.Element => {
    return (
        <div style={row}>
            <Button>Text</Button>
            <Button kind={KindButton.SECONDARY}>Text</Button>
            <Button kind={KindButton.TERTIARY}>Text</Button>
            <Button kind={KindButton.TEXT_ONLY}>Text only</Button>
            <Button size={SizeButton.SMALL}>Text</Button>
            <Button size={SizeButton.SMALL} kind={KindButton.SECONDARY}>
                Text
            </Button>
            <Button size={SizeButton.SMALL} kind={KindButton.TERTIARY}>
                Text
            </Button>
            <Button size={SizeButton.SMALL} kind={KindButton.TEXT_ONLY}>
                Text only
            </Button>
        </div>
    );
};

export const RowButtonDisabled = (): JSX.Element => {
    return (
        <div style={row}>
            <Button disabled>Text</Button>
            <Button kind={KindButton.SECONDARY} disabled>
                Text
            </Button>
            <Button kind={KindButton.TERTIARY} disabled>
                Text
            </Button>
            <Button kind={KindButton.TEXT_ONLY} disabled>
                Text only
            </Button>
            <Button size={SizeButton.SMALL} disabled>
                Text
            </Button>
            <Button size={SizeButton.SMALL} kind={KindButton.SECONDARY} disabled>
                Text
            </Button>
            <Button size={SizeButton.SMALL} kind={KindButton.TERTIARY} disabled>
                Text
            </Button>
            <Button size={SizeButton.SMALL} kind={KindButton.TEXT_ONLY} disabled>
                Text only
            </Button>
        </div>
    );
};

export const GalleryButton = (): JSX.Element => {
    return (
        <div style={container}>
            <H3 bold>Buttons</H3>
            <RowButton />
            <RowButtonDisabled />
        </div>
    );
};
