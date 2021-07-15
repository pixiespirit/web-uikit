import { Checkbox, H3 } from '@pixiepkg/core';
import React from 'react';
import { container, row } from './_shared-styles';

export const GalleryCheckbox = (): JSX.Element => {
  return (
    <div style={container}>
      <H3 bold>Checkboxs</H3>
      <div style={row}>
        <Checkbox />
        <Checkbox checked />
        <Checkbox checked disabled />
      </div>
    </div>
  );
};
