import React, { CSSProperties } from 'react';
import {
    H3,
    Display1,
    Display2,
    H1,
    H2,
    H4,
    H5,
    H6,
    Label1,
    Label2,
    Label3,
    Body1,
    Body2,
    Body3
} from '../../core/dist';
import { container } from './_shared-styles';

const gridContainer: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    rowGap: 20
};

export const TypographyDemo = (): JSX.Element => {
    return (
        <div style={container}>
            <H3 bold>Typography</H3>
            <div style={gridContainer}>
                <Display1 semiBold>Display 01</Display1>
                <Display1 bold>Display 01</Display1>
                <Display1 extraBold>Display 01</Display1>

                <Display2 semiBold>Display 02</Display2>
                <Display2 bold>Display 02</Display2>
                <Display2 extraBold>Display 02</Display2>

                <H1 semiBold>Heading 01</H1>
                <H1 bold>Heading 01</H1>
                <H1 extraBold>Heading 01</H1>

                <H2 semiBold>Heading 02</H2>
                <H2 bold>Heading 02</H2>
                <H2 extraBold>Heading 02</H2>

                <H3 semiBold>Heading 03</H3>
                <H3 bold>Heading 03</H3>
                <H3 extraBold>Heading 03</H3>

                <H4 semiBold>Heading 04</H4>
                <H4 bold>Heading 04</H4>
                <H4 extraBold>Heading 04</H4>

                <H5 semiBold>Heading 05</H5>
                <H5 bold>Heading 05</H5>
                <H5 extraBold>Heading 05</H5>

                <H6 semiBold>Heading 06</H6>
                <H6 bold>Heading 06</H6>
                <H6 extraBold>Heading 06</H6>

                <Label1>Label 01</Label1>
                <Body1 medium>Body 01</Body1>
                <Body1>Body 01</Body1>

                <Label2 semiBold>Label 02</Label2>
                <Body2 medium>Body 02</Body2>
                <Body2>Body 02</Body2>

                <Label3>Label 03</Label3>
                <Body3 medium>Body 03</Body3>
                <Body3>Body 03</Body3>
            </div>
        </div>
    );
};
