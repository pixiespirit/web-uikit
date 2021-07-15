import { H3, Input } from '@pixiepkg/core';
import React from 'react';
import { container, row } from './_shared-styles';

export const GalleryInput = (): JSX.Element => {
  return (
    <div style={{ ...container, width: 800 }}>
      <H3 bold>Inputs</H3>
      <div style={row}>
        <Input label="First name" />
        <Input label="First name" value="John Doe" disabled />
      </div>
      <div style={row}>
        <Input label="Password" type="password" />
        <Input label="Password" type="password" value="omgpassword" disabled />
      </div>
    </div>
  );
};
