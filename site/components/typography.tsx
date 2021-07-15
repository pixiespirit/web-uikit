import {
  Display1,
  Display2,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Label1,
  Label2,
  Label3,
  Label4
} from '@pixiepkg/core';
import React, { CSSProperties } from 'react';
import { container } from './_shared-styles';
import Link from 'next/link';

export const GalleryTypographyIntro = (): JSX.Element => {
  return (
    <div style={container}>
      <H3 bold>Typography</H3>
      <Label1>
        Check it out at{' '}
        <Link href="/typography">
          <a style={{ color: 'var(--color-info-main)' }}>Typography.</a>
        </Link>
      </Label1>
    </div>
  );
};

const gridContainer: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  rowGap: 20
};

export const GalleryTypography = (): JSX.Element => {
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

        <Label1 semiBold>Label 01</Label1>
        <Label1 medium>Label 01</Label1>
        <Label1>Label 01</Label1>

        <Label2 semiBold>Label 02</Label2>
        <Label2 medium>Label 02</Label2>
        <Label2>Label 02</Label2>

        <Label3 semiBold>Label 03</Label3>
        <Label3 medium>Label 03</Label3>
        <Label3>Label 03</Label3>

        <Label4 semiBold>Label 04</Label4>
        <Label4 medium>Label 04</Label4>
        <Label4>Label 04</Label4>
      </div>
    </div>
  );
};
