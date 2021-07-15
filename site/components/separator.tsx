import { H3, Separator } from '@pixiepkg/core';
import React from 'react';
import { container } from './_shared-styles';

export const GallerySeparator = (): JSX.Element => {
  return (
    <div style={{ ...container, maxWidth: 800 }}>
      <H3 bold>Separators</H3>
      <Separator />
      <Separator label="Separator" />
    </div>
  );
};
