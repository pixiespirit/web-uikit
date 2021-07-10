import { H3, Toggle } from '../../../core/src';
import React, { useState } from 'react';
import { container, row } from './_shared-styles';

export const GalleryToggle = (): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);
  const [checkex, setCheckex] = useState<boolean>(false);
  return (
    <div style={container}>
      <H3>Toggles</H3>
      <div style={row}>
        <Toggle checked={checked} setChecked={setChecked} />
        <Toggle checked={checkex} setChecked={setCheckex} disabled />
      </div>
    </div>
  );
};
